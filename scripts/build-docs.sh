#!/bin/bash

./scripts/build.sh

pnpm \
    --filter "@unify-ui/vite-plugin-vue-docs" \
    build

pnpm \
    --filter "@unify-ui/vue-docs" \
    build

