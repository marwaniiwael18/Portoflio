"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

exports.__esModule = true;
exports.processPaddingVertical = exports.processPaddingSingle = exports.processPaddingHorizontal = exports.processPadding = void 0;

var _boxModel = _interopRequireDefault(require("./boxModel"));

var processPadding = (0, _boxModel.default)({
  expandsTo: function expandsTo(_ref) {
    var first = _ref.first,
        second = _ref.second,
        third = _ref.third,
        fourth = _ref.fourth;
    return {
      paddingTop: first,
      paddingRight: second,
      paddingBottom: third,
      paddingLeft: fourth
    };
  },
  maxValues: 4
});
exports.processPadding = processPadding;
var processPaddingVertical = (0, _boxModel.default)({
  expandsTo: function expandsTo(_ref2) {
    var first = _ref2.first,
        second = _ref2.second;
    return {
      paddingTop: first,
      paddingBottom: second
    };
  },
  maxValues: 2
});
exports.processPaddingVertical = processPaddingVertical;
var processPaddingHorizontal = (0, _boxModel.default)({
  expandsTo: function expandsTo(_ref3) {
    var first = _ref3.first,
        second = _ref3.second;
    return {
      paddingRight: first,
      paddingLeft: second
    };
  },
  maxValues: 2
});
exports.processPaddingHorizontal = processPaddingHorizontal;
var processPaddingSingle = (0, _boxModel.default)();
exports.processPaddingSingle = processPaddingSingle;