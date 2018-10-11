# React-Webpack-Seed
A no nonsense, no gyp dependency, simple seed for React with Webpack.

## Author
Brandon Cooke

## Installation

#### Git
```bash
git clone https://github.com/BrandonCookeDev/react-webpack-seed.git
```
then in the cloned directory
```bash
npm install
```

#### NPM
```bash
npm install --save react-webpack-simple
```
then run
```bash
./node_modules/.bin/react
```
This will copy the seed into a folder called webapp into your project root.

## Running development server
Build the webpack bundle of everything in the src directory, 
and then launch the development webpack server:
```bash
npm run dev
```

Additionally, you can choose to build the webpack independently of launching the server
```bash
npm run build
```

And you can build and watch the file with 
```bash
npm run watch
```