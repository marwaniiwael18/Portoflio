"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = void 0;

var _flex = _interopRequireDefault(require("./flex"));

var _margins = require("./margins");

var _borders = _interopRequireDefault(require("./borders"));

var _paddings = require("./paddings");

var _objectPosition = _interopRequireDefault(require("./objectPosition"));

var _transformOrigin = _interopRequireDefault(require("./transformOrigin"));

var shorthands = {
  flex: _flex.default,
  margin: _margins.processMargin,
  marginHorizontal: _margins.processMarginHorizontal,
  marginVertical: _margins.processMarginVertical,
  marginTop: _margins.processMarginSingle,
  marginRight: _margins.processMarginSingle,
  marginBottom: _margins.processMarginSingle,
  marginLeft: _margins.processMarginSingle,
  padding: _paddings.processPadding,
  paddingHorizontal: _paddings.processPaddingHorizontal,
  paddingVertical: _paddings.processPaddingVertical,
  paddingTop: _paddings.processPaddingSingle,
  paddingRight: _paddings.processPaddingSingle,
  paddingBottom: _paddings.processPaddingSingle,
  paddingLeft: _paddings.processPaddingSingle,
  border: _borders.default,
  borderTop: _borders.default,
  borderRight: _borders.default,
  borderBottom: _borders.default,
  borderLeft: _borders.default,
  borderColor: _borders.default,
  borderRadius: _borders.default,
  borderStyle: _borders.default,
  borderWidth: _borders.default,
  objectPosition: _objectPosition.default,
  transformOrigin: _transformOrigin.default
};
/**
 * Transforms style key-value
 *
 * @param {String} key style key
 * @param {String} value style value
 * @returns {String | Number} transformed style values
 */

var expandStyle = function expandStyle(key, value) {
  var _ref;

  return shorthands[key] ? shorthands[key](key, value) : (_ref = {}, _ref[key] = value, _ref);
};
/**
 * Expand the shorthand properties.
 *
 * @param { Object } style object
 * @returns { Object } expanded style object
 */


var expand = function expand(style) {
  if (!style) return style;
  var propsArray = Object.keys(style);
  var resolvedStyle = {};

  for (var i = 0; i < propsArray.length; i += 1) {
    var key = propsArray[i];
    var value = style[key];
    var extended = expandStyle(key, value);
    var keys = Object.keys(extended);

    for (var j = 0; j < keys.length; j += 1) {
      var propName = keys[j];
      var propValue = extended[propName];
      resolvedStyle[propName] = propValue;
    }
  }

  return resolvedStyle;
};

var _default = expand;
exports.default = _default;