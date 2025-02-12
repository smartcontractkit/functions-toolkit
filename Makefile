# Makefile

# Define the default target
.PHONY: all
all: install

# Install Foundry and npm packages
.PHONY: install
install:
	@echo "Installing Foundry..."
	curl -L https://foundry.paradigm.xyz | bash
	@echo "Installing npm packages..."
	npm install

# Clean up the project
.PHONY: clean
clean:
	@echo "Cleaning up..."
	rm -rf node_modules
	rm -rf dist