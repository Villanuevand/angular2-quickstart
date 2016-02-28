module.export = {
	entry: {
    'app': './app/app.ts'
  },
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ],
    noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
  }
}