"use strict";

exports.__esModule = true;
exports.default = void 0;

var mapValues = function mapValues(object, fn) {
  var entries = Object.entries(object);
  return entries.reduce(function (acc, _ref, index) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = fn(value, key, index);
    return acc;
  }, {});
};

var _default = mapValues;
exports.default = _default;