"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize;

function memoize(callback) {
  let previous;
  let result;
  return (...dependencies) => {
    let hasChanged = false;

    if (previous) {
      if (previous.length !== dependencies.length) {
        hasChanged = true;
      } else {
        for (let i = 0; i < previous.length; i++) {
          if (previous[i] !== dependencies[i]) {
            hasChanged = true;
            break;
          }
        }
      }
    } else {
      hasChanged = true;
    }

    previous = dependencies;

    if (hasChanged || result === undefined) {
      result = callback(...dependencies);
    }

    return result;
  };
}
//# sourceMappingURL=memoize.js.map