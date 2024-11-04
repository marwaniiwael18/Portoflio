"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Casts value to array
 *
 * @param {any} value
 * @returns {Array} casted value
 */
var castArray = function castArray(value) {
  return Array.isArray(value) ? value : [value];
};

var _default = castArray;
exports.default = _default;