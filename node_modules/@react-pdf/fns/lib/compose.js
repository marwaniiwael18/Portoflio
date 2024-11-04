"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = void 0;

var _reverse = _interopRequireDefault(require("./reverse"));

/* eslint-disable no-await-in-loop */

/**
 * Performs right-to-left function composition
 *
 * @param  {...any} functions
 */
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (value) {
    var result = value;
    var reversedFns = (0, _reverse.default)(fns);

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    for (var i = 0; i < reversedFns.length; i += 1) {
      var fn = reversedFns[i];
      result = fn.apply(void 0, [result].concat(args));
    }

    return result;
  };
};

var _default = compose;
exports.default = _default;