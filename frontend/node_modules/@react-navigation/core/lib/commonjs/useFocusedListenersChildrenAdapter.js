"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFocusedListenersChildrenAdapter;

var React = _interopRequireWildcard(require("react"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook for passing focus callback to children
 */
function useFocusedListenersChildrenAdapter({
  navigation,
  focusedListeners
}) {
  const {
    addListener
  } = React.useContext(_NavigationBuilderContext.default);
  const listener = React.useCallback(callback => {
    if (navigation.isFocused()) {
      for (const listener of focusedListeners) {
        const {
          handled,
          result
        } = listener(callback);

        if (handled) {
          return {
            handled,
            result
          };
        }
      }

      return {
        handled: true,
        result: callback(navigation)
      };
    } else {
      return {
        handled: false,
        result: null
      };
    }
  }, [focusedListeners, navigation]);
  React.useEffect(() => addListener === null || addListener === void 0 ? void 0 : addListener('focus', listener), [addListener, listener]);
}
//# sourceMappingURL=useFocusedListenersChildrenAdapter.js.map