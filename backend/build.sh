#!/bin/bash
# Install and use Node 16.13.0
source ~/.nvm/nvm.sh
nvm install 16.13.0
nvm use 16.13.0
# Run your build commands
npm ci
npm run build
