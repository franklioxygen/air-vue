#!/usr/bin/env sh

yarn build
npm version patch
npm publish
git push origin main

set -e
npm run build
cd dist
cp index.html 404.html
git init
# first time use: git checkout -b main
git checkout main
git add -A
git commit -m 'deploy'
git push -f git@github.com:franklioxygen/air-vue.git main:gh-pages

cd -