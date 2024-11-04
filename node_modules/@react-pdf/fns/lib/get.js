"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = void 0;

var _isNil = _interopRequireDefault(require("./isNil"));

var _castArray = _interopRequireDefault(require("./castArray"));

var get = function get(target, path, defaultValue) {
  if ((0, _isNil.default)(target)) return defaultValue;

  var _path = (0, _castArray.default)(path);

  var result = target;

  for (var i = 0; i < _path.length; i += 1) {
    if ((0, _isNil.default)(result)) return undefined;
    result = result[_path[i]];
  }

  return (0, _isNil.default)(result) ? defaultValue : result;
};

var _default = get;
exports.default = _default;