"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useThenable;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useThenable(create) {
  const [promise] = React.useState(create); // Check if our thenable is synchronous

  let resolved = false;
  let value;
  promise.then(result => {
    resolved = true;
    value = result;
  });
  const [state, setState] = React.useState([resolved, value]);
  React.useEffect(() => {
    let cancelled = false;

    const resolve = async () => {
      let result;

      try {
        result = await promise;
      } finally {
        if (!cancelled) {
          setState([true, result]);
        }
      }
    };

    if (!resolved) {
      resolve();
    }

    return () => {
      cancelled = true;
    };
  }, [promise, resolved]);
  return state;
}
//# sourceMappingURL=useThenable.js.map