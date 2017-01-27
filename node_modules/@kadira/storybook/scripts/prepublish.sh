#!/bin/bash

echo "> Start transpiling ES2015"
echo ""
rm -rf ./dist
./node_modules/.bin/babel --ignore __tests__ --plugins "transform-runtime" ./src --out-dir ./dist
cp -r ./src/server/public ./dist/server/public
echo ""
echo "> Complete transpiling ES2015"
