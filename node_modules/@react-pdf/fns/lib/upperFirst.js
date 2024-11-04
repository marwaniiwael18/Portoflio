"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Capitalize first letter of string
 *
 * @param {String} string
 * @returns {String} capitalized string
 */
var upperFirst = function upperFirst(value) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

var _default = upperFirst;
exports.default = _default;