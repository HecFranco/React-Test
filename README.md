# React-Test

* `npm init`
* `npm install webpack webpack-cli --save-dev`
* `npm install webpack-dev-server --save-dev`
* `npm install css-loader style-loader file-loader url-loader html-webpack-plugin awesome-typescript-loader mini-css-extract-plugin css-loader --save-dev`

_[./package.json](./package.json)_
```diff
  "scripts": {
+    "start": "webpack-dev-server  --mode development --inline --hot --open",
+    "build": "webpack  --mode development"
  },
```

* `npm install typescript --save-dev`

_[./tsconfig.json](./tsconfig.json)_
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true
  },
  "compileOnSave": false,
  "exclude": [
    "node_modules"
  ]
}
```

* `npm install babel-core babel-preset-env --save-dev`

_[./.babelrc](./.babelrc)_
```json
 {
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ]
}
```

* `npm install bootstrap --save`

- Now, our **[./package.json](./package.json)** file should looks something like:

_[./package.json](./package.json)_
 ```json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "In this sample we are going to setup the basic plumbing to \"build\" our project and launch it in a dev server.",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --inline --hot --open",
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "awesome-typescript-loader": "^5.0.0",
    "babel-core": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "css-loader": "^0.28.11",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.0",
    "style-loader": "^0.20.3",
    "typescript": "^2.8.1",
    "url-loader": "^1.0.1",
    "webpack": "^4.5.0",
    "webpack-dev-server": "^3.1.3"
  },
  "dependencies": {
    "bootstrap": "^4.1.0"
  }
}
```
 * `npm install bootstrap --save`

_[./webpack.config.js](./webpack.config.js)_
 ```javascript
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let webpack = require('webpack');

let basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: [
    './main.ts',
    '../node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,        
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
};
 ```
* `npm install react react-dom --save`
* `npm install @types/react @types/react-dom --save-dev`

_[./src/index.html](./src/index.html)_
```diff
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <h1>Sample app</h1>
+     <div id="root"></div>
    </body>
  </html>
```