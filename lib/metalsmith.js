const metalsmith = require('metalsmith')

module.exports = metalsmith(__dirname) // __dirname defined by node.js: name of current working

  // source directory
  .source('../src')

  // destination directory
  .destination('../public')

  .clean(true)