#!/bin/bash

pnpm \
    --filter "@unify-ui/web-components" \
    build

pnpm \
    --filter "unify-ui" \
    build

