#!/usr/bin/env sh

set -e
npm run build
cd dist
git init
# first time use: git checkout -b main
git checkout main
git add -A
git commit -m 'deploy'
git push -f git@github.com:franklioxygen/VU.git main:gh-pages

cd -