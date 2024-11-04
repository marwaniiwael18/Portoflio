"use strict";

exports.__esModule = true;
exports.default = void 0;

var evolve = function evolve(transformations, object) {
  var result = object instanceof Array ? [] : {};
  var keys = Object.keys(object);

  for (var i = 0; i < keys.length; i += 1) {
    var key = keys[i];
    var transformation = transformations[key];
    var type = typeof transformation;

    if (type === 'function') {
      result[key] = transformation(object[key]);
    } else if (transformation && type === 'object') {
      result[key] = evolve(transformation, object[key]);
    } else result[key] = object[key];
  }

  return result;
};

var _default = evolve;
exports.default = _default;