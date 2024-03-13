#!/bin/bash

./scripts/build.sh

pnpm -r storybook:build
