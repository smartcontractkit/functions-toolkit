const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/simulateScript/simulateScript.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'simulateScript.bundle.js',
    library: {
      type: 'commonjs-static',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }], '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  externalsPresets: {
    // ignore built-in modules like path, fs, etc. - we trust browserify to handle these
    node: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
