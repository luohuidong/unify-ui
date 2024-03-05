#!/bin/bash

./scripts/build.sh

pnpm \
    --filter "unify-ui" \
    --filter "@unify-ui/web-components" \
    storybook:build
