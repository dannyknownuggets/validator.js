"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJWT;
var _assertString = _interopRequireDefault(require("./util/assertString"));
var _isBase = _interopRequireDefault(require("./isBase64"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function isJWT(str) {
  (0, _assertString.default)(str);
  var dotSplit = str.split('.');
  var len = dotSplit.length;
  if (len > 3 || len < 2) {
    return false;
  }
  return dotSplit.reduce(function (acc, currElem) {
    return acc && (0, _isBase.default)(currElem, {
      urlSafe: true
    });
  }, true);
}
module.exports = exports.default;
module.exports.default = exports.default;