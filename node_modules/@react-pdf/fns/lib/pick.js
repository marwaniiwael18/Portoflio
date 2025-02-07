"use strict";

exports.__esModule = true;
exports.default = void 0;

var pick = function pick(keys, obj) {
  var result = {};

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    if (key in obj) result[key] = obj[key];
  }

  return result;
};

var _default = pick;
exports.default = _default;