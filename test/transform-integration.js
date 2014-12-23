// /* global describe, it */
'use strict';

var browserify = require('browserify')
  , remapify = require('../index.js')
  , reactify = require('reactify')
  , path = require('path')
  , b = browserify({
    extensions: ['.js', '.jsx'],
    entries: path.join(__dirname, 'fixtures', 'transform-entry.js')
  })

b.transform(reactify)
b.plugin(remapify, [{
  src: '**/*.j*',
  cwd: './test/fixtures/target',
  expose: 'target'
}])

b.bundle().pipe(process.stdout);
