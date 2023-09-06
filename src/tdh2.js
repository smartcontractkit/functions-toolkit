const rnd = require('bcrypto/lib/random')
const sha256 = require('bcrypto/lib/sha256')
const elliptic = require('bcrypto/lib/js/elliptic')
const cipher = require('bcrypto/lib/cipher')

const { curves } = elliptic

const { Cipher } = cipher

const p256 = new curves.P256()
const groupName = 'P256'
const tdh2InputSize = 32

function toHexString(byteArray) {
  return Array.from(byteArray, function (byte) {
    return ('0' + (byte & 0xff).toString(16)).slice(-2)
  }).join('')
}

function tdh2Encrypt(pub, msg, label) {
  if (pub.Group != groupName) throw Error('invalid group')
  const g_bar = p256.decodePoint(Buffer.from(pub.G_bar, 'base64'))
  const h = p256.decodePoint(Buffer.from(pub.H, 'base64'))

  const r = p256.randomScalar(rnd)
  const s = p256.randomScalar(rnd)

  const c = xor(hash1(h.mul(r)), msg)

  const u = p256.g.mul(r)
  const w = p256.g.mul(s)
  const uBar = g_bar.mul(r)
  const wBar = g_bar.mul(s)

  const e = hash2(c, label, u, w, uBar, wBar)
  const f = s.add(r.mul(e).mod(p256.n)).mod(p256.n)

  return JSON.stringify({
    Group: groupName,
    C: c.toString('base64'),
    Label: label.toString('base64'),
    U: p256.encodePoint(u, false).toString('base64'),
    U_bar: p256.encodePoint(uBar, false).toString('base64'),
    E: p256.encodeScalar(e).toString('base64'),
    F: p256.encodeScalar(f).toString('base64'),
  })
}

function concatenate(points) {
  var out = groupName
  for (let i = 0; i < points.length; i++) {
    out += ',' + toHexString(p256.encodePoint(points[i], false))
  }

  return Buffer.from(out)
}

function hash1(point) {
  return sha256.digest(Buffer.concat([Buffer.from('tdh2hash1'), concatenate([point])]))
}

function hash2(msg, label, p1, p2, p3, p4) {
  if (msg.length != tdh2InputSize) throw new Error('message has incorrect length')

  if (label.length != tdh2InputSize) throw new Error('label has incorrect length')

  const h = sha256.digest(
    Buffer.concat([Buffer.from('tdh2hash2'), msg, label, concatenate([p1, p2, p3, p4])]),
  )

  return p256.decodeScalar(h)
}

function xor(a, b) {
  if (a.length != b.length) throw new Error('buffers with different lengths')

  var out = Buffer.alloc(a.length)
  for (var i = 0; i < a.length; i++) {
    out[i] = a[i] ^ b[i]
  }

  return out
}

function encrypt(pub, msg) {
  const ciph = new Cipher('AES-256-GCM')
  const key = rnd.randomBytes(tdh2InputSize)
  const nonce = rnd.randomBytes(12)

  ciph.init(key, nonce)
  const ctxt = Buffer.concat([ciph.update(msg), ciph.final(), ciph.getAuthTag()])

  const tdh2Ctxt = tdh2Encrypt(pub, key, Buffer.alloc(tdh2InputSize))

  return JSON.stringify({
    TDH2Ctxt: Buffer.from(tdh2Ctxt).toString('base64'),
    SymCtxt: ctxt.toString('base64'),
    Nonce: nonce.toString('base64'),
  })
}

module.exports = { encrypt }
