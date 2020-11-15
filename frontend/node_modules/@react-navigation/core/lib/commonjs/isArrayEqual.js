"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArrayEqual;

/**
 * Compare two arrays with primitive values as the content.
 * We need to make sure that both values and order match.
 */
function isArrayEqual(a, b) {
  return a.length === b.length && a.every((it, index) => it === b[index]);
}
//# sourceMappingURL=isArrayEqual.js.map