gulp = require 'gulp'
initBuild = require 'qing-build'
pkg = require './package.json'

build = initBuild
  gulp: gulp
  name: pkg.name
  githubOwner: 'mycolorway'
  version: pkg.version
  homepage: pkg.homepage
  umd:
    dependencies:
      cjs: Object.keys(pkg.dependencies)
      global: ['jQuery', 'QingModule']
      params: ['$', 'QingModule']
  karma:
    dependencies: [
      'node_modules/jquery/dist/jquery.js'
      'node_modules/qing-module/dist/qing-module.js'
    ],
    singleRun: true

gulp.task 'default', build.dev
gulp.task 'compile', build.compile
gulp.task 'test', build.test
gulp.task 'publish', build.publish
