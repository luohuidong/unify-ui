#!/bin/bash

source ./publish-package.sh

pnpm install
pnpm test

pnpm changeset version

is_modify=$(git status --porcelain)

if [ ! -z "$is_modify" ]; then
    echo "packages version changed"

    git config user.name "luohuidong"
    git config user.email "luohuidong01@126.com"
    git add .
    git commit -m "build: update packages version"

    pnpm release || utils::check_fail $? "release failed"

    git push || utils::check_fail $? "git push failed"
else
    echo "packages version not changed"
fi
