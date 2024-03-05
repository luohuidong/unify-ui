#!/bin/bash

./scripts/build.sh

pnpm \
    --filter "@unify-ui/vue-docs" \
    build

