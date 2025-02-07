"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Applies a function to the value at the given index of an array

 * @param {number} index
 * @param {function} fn
 * @param {array} collection
 * @returns copy of the array with the element at the given index replaced with the result of the function application.
 */
var adjust = function adjust(index, fn, collection) {
  var _Object$assign;

  if (index >= 0 && index >= collection.length) return collection;
  if (index < 0 && Math.abs(index) > collection.length) return collection;
  var i = index < 0 ? collection.length + index : index;
  return Object.assign([], collection, (_Object$assign = {}, _Object$assign[i] = fn(collection[i]), _Object$assign));
};

var _default = adjust;
exports.default = _default;