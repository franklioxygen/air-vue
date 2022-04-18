#!/usr/bin/env sh

#----- npm publish 
yarn build
npm version patch
npm publish
git push origin main
mv vite.config.js vite.config.publish.npm.js
mv vite.config.publish.gh-page.js vite.config.js

#-------gh page publish
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
mv vite.config.js vite.config.publish.gh-page.js
mv vite.config.publish.npm.js vite.config.js