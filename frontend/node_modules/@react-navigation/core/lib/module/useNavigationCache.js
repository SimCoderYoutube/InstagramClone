function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { CommonActions } from '@react-navigation/routers';

/**
 * Hook to cache navigation objects for each screen in the navigator.
 * It's important to cache them to make sure navigation objects don't change between renders.
 * This lets us apply optimizations like `React.memo` to minimize re-rendering screens.
 */
export default function useNavigationCache({
  state,
  getState,
  navigation,
  setOptions: _setOptions,
  router,
  emitter
}) {
  // Cache object which holds navigation objects for each screen
  // We use `React.useMemo` instead of `React.useRef` coz we want to invalidate it when deps change
  // In reality, these deps will rarely change, if ever
  const cache = React.useMemo(() => ({
    current: {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [getState, navigation, _setOptions, router, emitter]);

  const actions = _objectSpread(_objectSpread({}, router.actionCreators), CommonActions);

  cache.current = state.routes.reduce((acc, route) => {
    const previous = cache.current[route.key];

    if (previous) {
      // If a cached navigation object already exists, reuse it
      acc[route.key] = previous;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        emit
      } = navigation,
            rest = _objectWithoutProperties(navigation, ["emit"]);

      const dispatch = action => {
        const payload = typeof action === 'function' ? action(getState()) : action;
        navigation.dispatch(typeof payload === 'object' && payload != null ? _objectSpread({
          source: route.key
        }, payload) : payload);
      };

      const helpers = Object.keys(actions).reduce((acc, name) => {
        // @ts-expect-error: name is a valid key, but TypeScript is dumb
        acc[name] = (...args) => dispatch(actions[name](...args));

        return acc;
      }, {});
      acc[route.key] = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, rest), helpers), emitter.create(route.key)), {}, {
        dispatch,
        setOptions: options => _setOptions(o => _objectSpread(_objectSpread({}, o), {}, {
          [route.key]: _objectSpread(_objectSpread({}, o[route.key]), options)
        })),
        isFocused: () => {
          const state = getState();

          if (state.routes[state.index].key !== route.key) {
            return false;
          } // If the current screen is focused, we also need to check if parent navigator is focused
          // This makes sure that we return the focus state in the whole tree, not just this navigator


          return navigation ? navigation.isFocused() : true;
        }
      });
    }

    return acc;
  }, {});
  return cache.current;
}
//# sourceMappingURL=useNavigationCache.js.map