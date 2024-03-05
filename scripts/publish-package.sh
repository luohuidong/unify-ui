#!/bin/bash

source ./scripts/utils.sh

pnpm install || utils::check_fail $? "pnpm install failed"
./scripts/build.sh || utils::check_fail $? "build failed"
pnpm test || utils::check_fail $? "pnpm test failed"

pnpm changeset version || utils::check_fail $? "pnpm changeset version failed"

is_modify=$(git status --porcelain)

if [ ! -z "$is_modify" ]; then
    echo "packages version changed"

    git config user.name "luohuidong"
    git config user.email "luohuidong01@126.com"
    git add .
    git commit -m "build: update packages version"

    pnpm build || utils::check_fail $? "pnpm build failed"
    pnpm publish || utils::check_fail $? "pnpm publish failed"

    git push || utils::check_fail $? "git push failed"
else
    echo "packages version not changed"
fi
