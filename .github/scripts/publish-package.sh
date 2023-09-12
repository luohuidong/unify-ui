#!/bin/bash

pnpm install
pnpm changeset version

is_modify=$(git status --porcelain)

if [ ! -z "$is_modify" ]; then
    git config user.name "luohuidong"
    git config user.email "luohuidong01@126.com"
    git add .
    git commit -m "build: update packages version"

    pnpm release

    git push
fi
