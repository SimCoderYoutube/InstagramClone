"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useChildListeners;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook which lets child navigators add action listeners.
 */
function useChildListeners() {
  const {
    current: listeners
  } = React.useRef({
    action: [],
    focus: []
  });
  const addListener = React.useCallback((type, listener) => {
    // @ts-expect-error: listener should be correct type according to `type`
    listeners[type].push(listener);
    return () => {
      // @ts-expect-error: listener should be correct type according to `type`
      const index = listeners[type].indexOf(listener);
      listeners[type].splice(index, 1);
    };
  }, [listeners]);
  return {
    listeners,
    addListener
  };
}
//# sourceMappingURL=useChildListeners.js.map