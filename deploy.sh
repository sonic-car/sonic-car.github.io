#! /bin/bash


yarn build

rm -r ./pages/static
cp -r ./dist/* ./pages

git add pages

git commit -m "update the website pages"

git subtree push --prefix=pages github.io main