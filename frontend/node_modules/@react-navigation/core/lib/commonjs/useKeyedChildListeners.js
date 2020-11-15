"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useKeyedChildListeners;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook which lets child navigators add getters to be called for obtaining rehydrated state.
 */
function useKeyedChildListeners() {
  const {
    current: keyedListeners
  } = React.useRef({
    getState: {},
    beforeRemove: {}
  });
  const addKeyedListener = React.useCallback((type, key, listener) => {
    // @ts-expect-error: listener should be correct type according to `type`
    keyedListeners[type][key] = listener;
    return () => {
      // @ts-expect-error: listener should be correct type according to `type`
      keyedListeners[type][key] = undefined;
    };
  }, [keyedListeners]);
  return {
    keyedListeners,
    addKeyedListener
  };
}
//# sourceMappingURL=useKeyedChildListeners.js.map