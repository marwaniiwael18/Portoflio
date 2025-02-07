"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Parses scalar value in value and unit pairs
 *
 * @param {String} scalar value
 * @returns {Object} parsed value
 */
var parseValue = function parseValue(value) {
  var match = /^(-?\d*\.?\d+)(in|mm|cm|pt|vh|vw|px)?$/g.exec(value);
  return match ? {
    value: parseFloat(match[1], 10),
    unit: match[2] || 'pt'
  } : {
    value: value,
    unit: undefined
  };
};
/**
 * Transform given scalar value
 *
 * @param {Object} container
 * @param {String} styles value
 * @returns {Object} transformed value
 */


var transformUnit = function transformUnit(container, value) {
  var scalar = parseValue(value);
  var dpi = container.dpi || 72;
  var mmFactor = 1 / 25.4 * dpi;
  var cmFactor = 1 / 2.54 * dpi;

  switch (scalar.unit) {
    case 'in':
      return scalar.value * dpi;

    case 'mm':
      return scalar.value * mmFactor;

    case 'cm':
      return scalar.value * cmFactor;

    case 'vh':
      return scalar.value * (container.height / 100);

    case 'vw':
      return scalar.value * (container.width / 100);

    default:
      return scalar.value;
  }
};

var _default = transformUnit;
exports.default = _default;