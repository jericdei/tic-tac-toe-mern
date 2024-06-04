#!/bin/sh

# Run TypeScript compiler in watch mode
npx tsc --watch &

# Run Node.js server
node --watch dist/index.js
