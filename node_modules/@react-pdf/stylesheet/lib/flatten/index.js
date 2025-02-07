"use strict";

exports.__esModule = true;
exports.default = void 0;

var _fns = require("@react-pdf/fns");

/**
 * Remove nil values from array
 *
 * @param {Array} array
 * @returns {Array} array without nils
 */
var compact = function compact(array) {
  return array.filter(Boolean);
};
/**
 * Merges style objects array
 *
 * @param {Array} style objects array
 * @returns {Object} merged style object
 */


var mergeStyles = function mergeStyles(styles) {
  return styles.reduce(function (acc, style) {
    var s = Array.isArray(style) ? flatten(style) : style;
    Object.keys(s).forEach(function (key) {
      if (s[key] !== null && s[key] !== undefined) {
        acc[key] = s[key];
      }
    });
    return acc;
  }, {});
};
/**
 * Flattens an array of style objects, into one aggregated style object.
 *
 * @param {Array} style objects array
 * @returns {Object} flatted style object
 */


var flatten = (0, _fns.compose)(mergeStyles, compact, _fns.castArray);
var _default = flatten;
exports.default = _default;