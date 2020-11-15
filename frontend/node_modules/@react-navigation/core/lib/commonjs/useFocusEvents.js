"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFocusEvents;

var React = _interopRequireWildcard(require("react"));

var _NavigationContext = _interopRequireDefault(require("./NavigationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook to take care of emitting `focus` and `blur` events.
 */
function useFocusEvents({
  state,
  emitter
}) {
  const navigation = React.useContext(_NavigationContext.default);
  const lastFocusedKeyRef = React.useRef();
  const currentFocusedKey = state.routes[state.index].key; // When the parent screen changes its focus state, we also need to change child's focus
  // Coz the child screen can't be focused if the parent screen is out of focus

  React.useEffect(() => navigation === null || navigation === void 0 ? void 0 : navigation.addListener('focus', () => {
    lastFocusedKeyRef.current = currentFocusedKey;
    emitter.emit({
      type: 'focus',
      target: currentFocusedKey
    });
  }), [currentFocusedKey, emitter, navigation]);
  React.useEffect(() => navigation === null || navigation === void 0 ? void 0 : navigation.addListener('blur', () => {
    lastFocusedKeyRef.current = undefined;
    emitter.emit({
      type: 'blur',
      target: currentFocusedKey
    });
  }), [currentFocusedKey, emitter, navigation]);
  React.useEffect(() => {
    const lastFocusedKey = lastFocusedKeyRef.current;
    lastFocusedKeyRef.current = currentFocusedKey; // We wouldn't have `lastFocusedKey` on initial mount
    // Fire focus event for the current route on mount if there's no parent navigator

    if (lastFocusedKey === undefined && !navigation) {
      emitter.emit({
        type: 'focus',
        target: currentFocusedKey
      });
    } // We should only emit events when the focused key changed and navigator is focused
    // When navigator is not focused, screens inside shouldn't receive focused status either


    if (lastFocusedKey === currentFocusedKey || !(navigation ? navigation.isFocused() : true)) {
      return;
    }

    if (lastFocusedKey === undefined) {
      // Only fire events after initial mount
      return;
    }

    emitter.emit({
      type: 'blur',
      target: lastFocusedKey
    });
    emitter.emit({
      type: 'focus',
      target: currentFocusedKey
    });
  }, [currentFocusedKey, emitter, navigation]);
}
//# sourceMappingURL=useFocusEvents.js.map