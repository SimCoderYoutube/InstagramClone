function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import NavigationBuilderContext from './NavigationBuilderContext';
import NavigationRouteContext from './NavigationRouteContext';
import isArrayEqual from './isArrayEqual';
export default function useOnGetState({
  getState,
  getStateListeners
}) {
  const {
    addKeyedListener
  } = React.useContext(NavigationBuilderContext);
  const route = React.useContext(NavigationRouteContext);
  const key = route ? route.key : 'root';
  const getRehydratedState = React.useCallback(() => {
    const state = getState(); // Avoid returning new route objects if we don't need to

    const routes = state.routes.map(route => {
      var _getStateListeners$ro;

      const childState = (_getStateListeners$ro = getStateListeners[route.key]) === null || _getStateListeners$ro === void 0 ? void 0 : _getStateListeners$ro.call(getStateListeners);

      if (route.state === childState) {
        return route;
      }

      return _objectSpread(_objectSpread({}, route), {}, {
        state: childState
      });
    });

    if (isArrayEqual(state.routes, routes)) {
      return state;
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      routes
    });
  }, [getState, getStateListeners]);
  React.useEffect(() => {
    return addKeyedListener === null || addKeyedListener === void 0 ? void 0 : addKeyedListener('getState', key, getRehydratedState);
  }, [addKeyedListener, getRehydratedState, key]);
}
//# sourceMappingURL=useOnGetState.js.map