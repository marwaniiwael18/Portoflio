"use strict";

exports.__esModule = true;
exports.default = void 0;

var matchNumber = function matchNumber(value) {
  return typeof value === 'string' && /^-?\d*\.?\d*$/.test(value);
};

var castFloat = function castFloat(value) {
  if (typeof value !== 'string') return value;
  if (matchNumber(value)) return parseFloat(value, 10);
  return value;
};

var _default = castFloat;
exports.default = _default;