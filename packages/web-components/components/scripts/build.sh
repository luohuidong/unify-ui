#!/bin/bash

npx tsc -p tsconfig.prod.json
cp -r src/styles dist