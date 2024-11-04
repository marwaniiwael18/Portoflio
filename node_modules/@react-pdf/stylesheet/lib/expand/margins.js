"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.processMarginVertical = exports.processMarginSingle = exports.processMarginHorizontal = exports.processMargin = void 0;

var _boxModel = _interopRequireDefault(require("./boxModel"));

var processMargin = (0, _boxModel.default)({
  expandsTo: function expandsTo(_ref) {
    var first = _ref.first,
        second = _ref.second,
        third = _ref.third,
        fourth = _ref.fourth;
    return {
      marginTop: first,
      marginRight: second,
      marginBottom: third,
      marginLeft: fourth
    };
  },
  maxValues: 4,
  autoSupported: true
});
exports.processMargin = processMargin;
var processMarginVertical = (0, _boxModel.default)({
  expandsTo: function expandsTo(_ref2) {
    var first = _ref2.first,
        second = _ref2.second;
    return {
      marginTop: first,
      marginBottom: second
    };
  },
  maxValues: 2,
  autoSupported: true
});
exports.processMarginVertical = processMarginVertical;
var processMarginHorizontal = (0, _boxModel.default)({
  expandsTo: function expandsTo(_ref3) {
    var first = _ref3.first,
        second = _ref3.second;
    return {
      marginRight: first,
      marginLeft: second
    };
  },
  maxValues: 2,
  autoSupported: true
});
exports.processMarginHorizontal = processMarginHorizontal;
var processMarginSingle = (0, _boxModel.default)({
  autoSupported: true
});
exports.processMarginSingle = processMarginSingle;