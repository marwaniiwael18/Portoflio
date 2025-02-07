"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = void 0;

var _hslToHex = _interopRequireDefault(require("hsl-to-hex"));

var _colorString = _interopRequireDefault(require("color-string"));

var isRgb = function isRgb(value) {
  return /rgba?/g.test(value);
};

var isHsl = function isHsl(value) {
  return /hsla?/g.test(value);
};
/**
 * Transform rgb color to hexa
 *
 * @param {String} styles value
 * @returns {Object} transformed value
 */


var parseRgb = function parseRgb(value) {
  var rgb = _colorString.default.get.rgb(value);

  return _colorString.default.to.hex(rgb);
};
/**
 * Transform Hsl color to hexa
 *
 * @param {String} styles value
 * @returns {Object} transformed value
 */


var parseHsl = function parseHsl(value) {
  var hsl = _colorString.default.get.hsl(value).map(Math.round);

  var hex = _hslToHex.default.apply(void 0, hsl);

  return hex.toUpperCase();
};
/**
 * Transform given color to hexa
 *
 * @param {String} styles value
 * @returns {Object} transformed value
 */


var transformColor = function transformColor(value) {
  if (isRgb(value)) return parseRgb(value);
  if (isHsl(value)) return parseHsl(value);
  return value;
};

var _default = transformColor;
exports.default = _default;