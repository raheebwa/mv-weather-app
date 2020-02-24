#!/bin/bash

# 0. Create Development and setup branch branch
git checkout -b develop
git checkout -b setup
# 1. Init npm
npm init -y
# 2. Add support for linters
npx install-peerdeps --dev eslint-config-airbnb
npm i -D stylelint prettier
npm i -D stylelint-config-standard
# 3. Create Directories and default files
mkdir src
mkdir dist
touch src/index.js 
# 4. commit and push to origin
git add .
git commit -m "Setup project directories"

# 5. Add Webpack
npm install webpack webpack-cli --save-dev

touch webpack.config.js

git add .
git commit -m "Added webpack & config file"

# 6. Add css support
npm install --save-dev style-loader css-loader
touch src/style.css


echo "
.hello {
  color: red;
}
" >> src/style.css

git add .
git commit -m "Add css loader to webpack"

npm install --save-dev webpack-dev-server

git add .
git commit -m "Add web dev server"
# 11. Add config to webpack for asset mamgement 
echo "

const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
" >>webpack.config.js

git add .
git commit -m "Add webpack config"



# Build with new config
npx webpack --config webpack.config.js

git add .
git commit -m "[feat] first run of config with webpack"


git checkout develop
git merge setup


