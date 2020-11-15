"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useScrollToTop;

var React = _interopRequireWildcard(require("react"));

var _core = require("@react-navigation/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getScrollableNode(ref) {
  if (ref.current == null) {
    return null;
  }

  if ('scrollToTop' in ref.current || 'scrollTo' in ref.current || 'scrollToOffset' in ref.current || 'scrollResponderScrollTo' in ref.current) {
    // This is already a scrollable node.
    return ref.current;
  } else if ('getScrollResponder' in ref.current) {
    // If the view is a wrapper like FlatList, SectionList etc.
    // We need to use `getScrollResponder` to get access to the scroll responder
    return ref.current.getScrollResponder();
  } else if ('getNode' in ref.current) {
    // When a `ScrollView` is wraped in `Animated.createAnimatedComponent`
    // we need to use `getNode` to get the ref to the actual scrollview.
    // Note that `getNode` is deprecated in newer versions of react-native
    // this is why we check if we already have a scrollable node above.
    return ref.current.getNode();
  } else {
    return ref.current;
  }
}

function useScrollToTop(ref) {
  const navigation = (0, _core.useNavigation)();
  const route = (0, _core.useRoute)();
  React.useEffect(() => {
    let current = navigation; // The screen might be inside another navigator such as stack nested in tabs
    // We need to find the closest tab navigator and add the listener there

    while (current && current.dangerouslyGetState().type !== 'tab') {
      current = current.dangerouslyGetParent();
    }

    if (!current) {
      return;
    }

    const unsubscribe = current.addListener( // We don't wanna import tab types here to avoid extra deps
    // in addition, there are multiple tab implementations
    // @ts-expect-error
    'tabPress', e => {
      // We should scroll to top only when the screen is focused
      const isFocused = navigation.isFocused(); // In a nested stack navigator, tab press resets the stack to first screen
      // So we should scroll to top only when we are on first screen

      const isFirst = navigation === current || navigation.dangerouslyGetState().routes[0].key === route.key; // Run the operation in the next frame so we're sure all listeners have been run
      // This is necessary to know if preventDefault() has been called

      requestAnimationFrame(() => {
        const scrollable = getScrollableNode(ref);

        if (isFocused && isFirst && scrollable && !e.defaultPrevented) {
          if ('scrollToTop' in scrollable) {
            scrollable.scrollToTop();
          } else if ('scrollTo' in scrollable) {
            scrollable.scrollTo({
              y: 0,
              animated: true
            });
          } else if ('scrollToOffset' in scrollable) {
            scrollable.scrollToOffset({
              offset: 0,
              animated: true
            });
          } else if ('scrollResponderScrollTo' in scrollable) {
            scrollable.scrollResponderScrollTo({
              y: 0,
              animated: true
            });
          }
        }
      });
    });
    return unsubscribe;
  }, [navigation, ref, route.key]);
}
//# sourceMappingURL=useScrollToTop.js.map