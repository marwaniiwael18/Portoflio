"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = void 0;

var _castArray = _interopRequireDefault(require("./castArray"));

var omit = function omit(keys, object) {
  var _keys = (0, _castArray.default)(keys);

  var copy = Object.assign({}, object);

  _keys.forEach(function (key) {
    delete copy[key];
  });

  return copy;
};

var _default = omit;
exports.default = _default;