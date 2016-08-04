/**
 * qing-sample v1.0.0
 * http://mycolorway.github.io/qing-sample
 *
 * Copyright Mycolorway Design
 * Released under the MIT license
 * http://mycolorway.github.io/qing-sample/license.html
 *
 * Date: 2016-08-4
 */
;(function(root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'),require('qing-module'));
  } else {
    root.QingSample = factory(root.jQuery,root.QingModule);
  }
}(this, function ($,QingModule) {
var define, module, exports;
var b = require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"qing-sample":[function(require,module,exports){
var QingSample,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

QingSample = (function(superClass) {
  extend(QingSample, superClass);

  QingSample.opts = {
    el: null
  };

  function QingSample(opts) {
    QingSample.__super__.constructor.apply(this, arguments);
    this.el = $(this.opts.el);
    if (!(this.el.length > 0)) {
      throw new Error('QingModule: option el is required');
    }
    this.opts = $.extend({}, QingSample.opts, this.opts);
    this._render();
  }

  QingSample.prototype._render = function() {
    this.el.append("<p>This is a sample component.</p>");
    return this.el.addClass('qing-sample').data('qingSample', this);
  };

  QingSample.prototype.destroy = function() {
    return this.el.empty().removeData('qingSample');
  };

  return QingSample;

})(QingModule);

module.exports = QingSample;

},{}]},{},[]);

return b('qing-sample');
}));
