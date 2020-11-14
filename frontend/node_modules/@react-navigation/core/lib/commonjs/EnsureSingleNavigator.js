"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EnsureSingleNavigator;
exports.SingleNavigatorContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MULTIPLE_NAVIGATOR_ERROR = "Another navigator is already registered for this container. You likely have multiple navigators under a single \"NavigationContainer\" or \"Screen\". Make sure each navigator is under a separate \"Screen\" container. See https://reactnavigation.org/docs/nesting-navigators for a guide on nesting.";
const SingleNavigatorContext = React.createContext(undefined);
/**
 * Component which ensures that there's only one navigator nested under it.
 */

exports.SingleNavigatorContext = SingleNavigatorContext;

function EnsureSingleNavigator({
  children
}) {
  const navigatorKeyRef = React.useRef();
  const value = React.useMemo(() => ({
    register(key) {
      const currentKey = navigatorKeyRef.current;

      if (currentKey !== undefined && key !== currentKey) {
        throw new Error(MULTIPLE_NAVIGATOR_ERROR);
      }

      navigatorKeyRef.current = key;
    },

    unregister(key) {
      const currentKey = navigatorKeyRef.current;

      if (key !== currentKey) {
        return;
      }

      navigatorKeyRef.current = undefined;
    }

  }), []);
  return /*#__PURE__*/React.createElement(SingleNavigatorContext.Provider, {
    value: value
  }, children);
}
//# sourceMappingURL=EnsureSingleNavigator.js.map