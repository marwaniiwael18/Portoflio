"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.transformColor = exports.processTransform = exports.default = void 0;

var _fns = require("@react-pdf/fns");

var _expand = _interopRequireDefault(require("./expand"));

var _flatten = _interopRequireDefault(require("./flatten"));

var _transform = _interopRequireDefault(require("./transform"));

var _mediaQueries = _interopRequireDefault(require("./mediaQueries"));

var _colors = _interopRequireDefault(require("./transform/colors"));

exports.transformColor = _colors.default;

var _transform2 = _interopRequireDefault(require("./transform/transform"));

exports.processTransform = _transform2.default;

/**
 * Resolves styles
 *
 * @param {Object} container
 * @param {Object} style object
 * @returns {Object} resolved style object
 */
var resolveStyles = function resolveStyles(container, style) {
  var computeMediaQueries = function computeMediaQueries(value) {
    return (0, _mediaQueries.default)(container, value);
  };

  return (0, _fns.compose)((0, _transform.default)(container), _expand.default, computeMediaQueries, _flatten.default)(style);
}; // Utils exported for SVG processing


var _default = resolveStyles;
exports.default = _default;