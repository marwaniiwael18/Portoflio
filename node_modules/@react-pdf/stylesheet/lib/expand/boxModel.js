"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.default = void 0;

var _parse = _interopRequireDefault(require("postcss-value-parser/lib/parse"));

var _unit = _interopRequireDefault(require("postcss-value-parser/lib/unit"));

/* eslint-disable no-plusplus */
var BOX_MODEL_UNITS = 'px,in,mm,cm,pt,%,vw,vh';

var logError = function logError(style, value) {
  console.error("\n    @react-pdf/stylesheet parsing error:\n\n    " + style + ": " + value + ",\n    " + ' '.repeat(style.length + 2) + "^\n    Unsupported " + style + " value format\n  ");
};

var expandBoxModel = function expandBoxModel(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      expandsTo = _ref.expandsTo,
      _ref$maxValues = _ref.maxValues,
      maxValues = _ref$maxValues === void 0 ? 1 : _ref$maxValues,
      _ref$autoSupported = _ref.autoSupported,
      autoSupported = _ref$autoSupported === void 0 ? false : _ref$autoSupported;

  return function (model, value) {
    var _ref2;

    var nodes = (0, _parse.default)("" + value);
    var parts = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]; // value contains `calc`, `url` or other css function
      // `,`, `/` or strings that unsupported by margin and padding

      if (node.type === 'function' || node.type === 'string' || node.type === 'div') {
        logError(model, value);
        return {};
      }

      if (node.type === 'word') {
        if (node.value === 'auto' && autoSupported) {
          parts.push(node.value);
        } else {
          var result = (0, _unit.default)(node.value); // when unit isn't specified this condition is true

          if (result && BOX_MODEL_UNITS.includes(result.unit)) {
            parts.push(node.value);
          } else {
            logError(model, value);
            return {};
          }
        }
      }
    } // checks that we have enough parsed values


    if (parts.length > maxValues) {
      logError(model, value);
      return {};
    }

    var first = parts[0];

    if (expandsTo) {
      var second = parts[1] || parts[0];
      var third = parts[2] || parts[0];
      var fourth = parts[3] || parts[1] || parts[0];
      return expandsTo({
        first: first,
        second: second,
        third: third,
        fourth: fourth
      });
    }

    return _ref2 = {}, _ref2[model] = first, _ref2;
  };
};

var _default = expandBoxModel;
exports.default = _default;