"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigationState;

var React = _interopRequireWildcard(require("react"));

var _useNavigation = _interopRequireDefault(require("./useNavigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to get a value from the current navigation state using a selector.
 *
 * @param selector Selector function to get a value from the state.
 */
function useNavigationState(selector) {
  const navigation = (0, _useNavigation.default)(); // We don't care about the state value, we run the selector again at the end
  // The state is only to make sure that there's a re-render when we have a new value

  const [, setResult] = React.useState(() => selector(navigation.dangerouslyGetState())); // We store the selector in a ref to avoid re-subscribing listeners every render

  const selectorRef = React.useRef(selector);
  React.useEffect(() => {
    selectorRef.current = selector;
  });
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      setResult(selectorRef.current(e.data.state));
    });
    return unsubscribe;
  }, [navigation]);
  return selector(navigation.dangerouslyGetState());
}
//# sourceMappingURL=useNavigationState.js.map