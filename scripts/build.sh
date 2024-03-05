#!/bin/bash

pnpm \
    --filter "@unify-ui/vite-plugin-vue-docs" \
    --filter "@unify-ui/web-components" \
    build

pnpm \
    --filter "unify-ui" \
    build

pnpm \
    --filter "@unify-ui/vue-docs" \
    build

