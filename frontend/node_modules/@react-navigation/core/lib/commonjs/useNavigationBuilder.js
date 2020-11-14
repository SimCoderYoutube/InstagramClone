"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNavigationBuilder;

var React = _interopRequireWildcard(require("react"));

var _reactIs = require("react-is");

var _routers = require("@react-navigation/routers");

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

var _NavigationRouteContext = _interopRequireDefault(require("./NavigationRouteContext"));

var _Screen = _interopRequireDefault(require("./Screen"));

var _useEventEmitter = _interopRequireDefault(require("./useEventEmitter"));

var _useRegisterNavigator = _interopRequireDefault(require("./useRegisterNavigator"));

var _useDescriptors = _interopRequireDefault(require("./useDescriptors"));

var _useNavigationHelpers = _interopRequireDefault(require("./useNavigationHelpers"));

var _useOnAction = _interopRequireDefault(require("./useOnAction"));

var _useFocusEvents = _interopRequireDefault(require("./useFocusEvents"));

var _useOnRouteFocus = _interopRequireDefault(require("./useOnRouteFocus"));

var _useChildListeners = _interopRequireDefault(require("./useChildListeners"));

var _useFocusedListenersChildrenAdapter = _interopRequireDefault(require("./useFocusedListenersChildrenAdapter"));

var _types = require("./types");

var _useKeyedChildListeners = _interopRequireDefault(require("./useKeyedChildListeners"));

var _useOnGetState = _interopRequireDefault(require("./useOnGetState"));

var _useScheduleUpdate = _interopRequireDefault(require("./useScheduleUpdate"));

var _useCurrentRender = _interopRequireDefault(require("./useCurrentRender"));

var _isArrayEqual = _interopRequireDefault(require("./isArrayEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions
_types.PrivateValueStore;

/**
 * Extract route config object from React children elements.
 *
 * @param children React Elements to extract the config from.
 */
const getRouteConfigsFromChildren = children => {
  const configs = React.Children.toArray(children).reduce((acc, child) => {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      if (child.type === _Screen.default) {
        // We can only extract the config from `Screen` elements
        // If something else was rendered, it's probably a bug
        acc.push(child.props);
        return acc;
      }

      if (child.type === React.Fragment) {
        // When we encounter a fragment, we need to dive into its children to extract the configs
        // This is handy to conditionally define a group of screens
        acc.push(...getRouteConfigsFromChildren(child.props.children));
        return acc;
      }
    }

    throw new Error("A navigator can only contain 'Screen' components as its direct children (found '".concat( // @ts-expect-error: child can be any type and we're accessing it safely, but TS doesn't understand it
    child.type && child.type.name ? child.type.name : String(child), "')"));
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    configs.forEach(config => {
      const {
        name,
        children,
        component,
        getComponent
      } = config;

      if (typeof name !== 'string' || !name) {
        throw new Error("Got an invalid name (".concat(JSON.stringify(name), ") for the screen. It must be a non-empty string."));
      }

      if (children != null || component !== undefined || getComponent !== undefined) {
        if (children != null && component !== undefined) {
          throw new Error("Got both 'component' and 'children' props for the screen '".concat(name, "'. You must pass only one of them."));
        }

        if (children != null && getComponent !== undefined) {
          throw new Error("Got both 'getComponent' and 'children' props for the screen '".concat(name, "'. You must pass only one of them."));
        }

        if (component !== undefined && getComponent !== undefined) {
          throw new Error("Got both 'component' and 'getComponent' props for the screen '".concat(name, "'. You must pass only one of them."));
        }

        if (children != null && typeof children !== 'function') {
          throw new Error("Got an invalid value for 'children' prop for the screen '".concat(name, "'. It must be a function returning a React Element."));
        }

        if (component !== undefined && !(0, _reactIs.isValidElementType)(component)) {
          throw new Error("Got an invalid value for 'component' prop for the screen '".concat(name, "'. It must be a valid React Component."));
        }

        if (getComponent !== undefined && typeof getComponent !== 'function') {
          throw new Error("Got an invalid value for 'getComponent' prop for the screen '".concat(name, "'. It must be a function returning a React Component."));
        }

        if (typeof component === 'function' && component.name === 'component') {
          // Inline anonymous functions passed in the `component` prop will have the name of the prop
          // It's relatively safe to assume that it's not a component since it should also have PascalCase name
          // We won't catch all scenarios here, but this should catch a good chunk of incorrect use.
          console.warn("Looks like you're passing an inline function for 'component' prop for the screen '".concat(name, "' (e.g. component={() => <SomeComponent />}). Passing an inline function will cause the component state to be lost on re-render and cause perf issues since it's re-created every render. You can pass the function as children to 'Screen' instead to achieve the desired behaviour."));
        }
      } else {
        throw new Error("Couldn't find a 'component', 'getComponent' or 'children' prop for the screen '".concat(name, "'. This can happen if you passed 'undefined'. You likely forgot to export your component from the file it's defined in, or mixed up default import and named import when importing."));
      }
    });
  }

  return configs;
};
/**
 * Hook for building navigators.
 *
 * @param createRouter Factory method which returns router object.
 * @param options Options object containing `children` and additional options for the router.
 * @returns An object containing `state`, `navigation`, `descriptors` objects.
 */


function useNavigationBuilder(createRouter, options) {
  var _route$params3;

  const navigatorKey = (0, _useRegisterNavigator.default)();
  const route = React.useContext(_NavigationRouteContext.default);
  const previousNestedParamsRef = React.useRef(route === null || route === void 0 ? void 0 : route.params);
  React.useEffect(() => {
    previousNestedParamsRef.current = route === null || route === void 0 ? void 0 : route.params;
  }, [route]);

  const {
    children
  } = options,
        rest = _objectWithoutProperties(options, ["children"]);

  const {
    current: router
  } = React.useRef(createRouter(_objectSpread(_objectSpread({}, rest), (route === null || route === void 0 ? void 0 : route.params) && route.params.initial !== false && typeof route.params.screen === 'string' ? {
    initialRouteName: route.params.screen
  } : null)));
  const routeConfigs = getRouteConfigsFromChildren(children);
  const screens = routeConfigs.reduce((acc, config) => {
    if (config.name in acc) {
      throw new Error("A navigator cannot contain multiple 'Screen' components with the same name (found duplicate screen named '".concat(config.name, "')"));
    }

    acc[config.name] = config;
    return acc;
  }, {});
  const routeNames = routeConfigs.map(config => config.name);
  const routeParamList = routeNames.reduce((acc, curr) => {
    var _route$params, _route$params2;

    const {
      initialParams
    } = screens[curr];
    const initialParamsFromParams = (route === null || route === void 0 ? void 0 : (_route$params = route.params) === null || _route$params === void 0 ? void 0 : _route$params.initial) !== false && (route === null || route === void 0 ? void 0 : (_route$params2 = route.params) === null || _route$params2 === void 0 ? void 0 : _route$params2.screen) === curr ? route.params.params : undefined;
    acc[curr] = initialParams !== undefined || initialParamsFromParams !== undefined ? _objectSpread(_objectSpread({}, initialParams), initialParamsFromParams) : undefined;
    return acc;
  }, {});

  if (!routeNames.length) {
    throw new Error("Couldn't find any screens for the navigator. Have you defined any screens as its children?");
  }

  const isStateValid = React.useCallback(state => state.type === undefined || state.type === router.type, [router.type]);
  const isStateInitialized = React.useCallback(state => state !== undefined && state.stale === false && isStateValid(state), [isStateValid]);
  const {
    state: currentState,
    getState: getCurrentState,
    setState,
    setKey,
    getKey,
    getIsInitial
  } = React.useContext(_NavigationStateContext.default);
  const [initializedState, isFirstStateInitialization] = React.useMemo(() => {
    // If the current state isn't initialized on first render, we initialize it
    // We also need to re-initialize it if the state passed from parent was changed (maybe due to reset)
    // Otherwise assume that the state was provided as initial state
    // So we need to rehydrate it to make it usable
    if (currentState === undefined || !isStateValid(currentState)) {
      return [router.getInitialState({
        routeNames,
        routeParamList
      }), true];
    } else {
      return [router.getRehydratedState(currentState, {
        routeNames,
        routeParamList
      }), false];
    } // We explicitly don't include routeNames/routeParamList in the dep list
    // below. We want to avoid forcing a new state to be calculated in cases
    // where routeConfigs change without affecting routeNames/routeParamList.
    // Instead, we handle changes to these in the nextState code below. Note
    // that some changes to routeConfigs are explicitly ignored, such as changes
    // to initialParams
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [currentState, router, isStateValid]);
  let state = // If the state isn't initialized, or stale, use the state we initialized instead
  // The state won't update until there's a change needed in the state we have initalized locally
  // So it'll be `undefined` or stale until the first navigation event happens
  isStateInitialized(currentState) ? currentState : initializedState;
  let nextState = state;

  if (!(0, _isArrayEqual.default)(state.routeNames, routeNames)) {
    // When the list of route names change, the router should handle it to remove invalid routes
    nextState = router.getStateForRouteNamesChange(state, {
      routeNames,
      routeParamList
    });
  }

  if (typeof (route === null || route === void 0 ? void 0 : (_route$params3 = route.params) === null || _route$params3 === void 0 ? void 0 : _route$params3.screen) === 'string' && (route.params !== previousNestedParamsRef.current || route.params.initial === false && isFirstStateInitialization)) {
    // If the route was updated with new name and/or params, we should navigate there
    // The update should be limited to current navigator only, so we call the router manually
    const updatedState = router.getStateForAction(nextState, _routers.CommonActions.navigate(route.params.screen, route.params.params), {
      routeNames,
      routeParamList
    });
    nextState = updatedState !== null ? router.getRehydratedState(updatedState, {
      routeNames,
      routeParamList
    }) : nextState;
  }

  const shouldUpdate = state !== nextState;
  (0, _useScheduleUpdate.default)(() => {
    if (shouldUpdate) {
      // If the state needs to be updated, we'll schedule an update
      setState(nextState);
    }
  }); // The up-to-date state will come in next render, but we don't need to wait for it
  // We can't use the outdated state since the screens have changed, which will cause error due to mismatched config
  // So we override the state object we return to use the latest state as soon as possible

  state = nextState;
  React.useEffect(() => {
    setKey(navigatorKey);

    if (!getIsInitial()) {
      // If it's not initial render, we need to update the state
      // This will make sure that our container gets notifier of state changes due to new mounts
      // This is necessary for proper screen tracking, URL updates etc.
      setState(nextState);
    }

    return () => {
      // We need to clean up state for this navigator on unmount
      // We do it in a timeout because we need to detect if another navigator mounted in the meantime
      // For example, if another navigator has started rendering, we should skip cleanup
      // Otherwise, our cleanup step will cleanup state for the other navigator and re-initialize it
      setTimeout(() => {
        if (getCurrentState() !== undefined && getKey() === navigatorKey) {
          setState(undefined);
        }
      }, 0);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // We initialize this ref here to avoid a new getState getting initialized
  // whenever initializedState changes. We want getState to have access to the
  // latest initializedState, but don't need it to change when that happens

  const initializedStateRef = React.useRef();
  initializedStateRef.current = initializedState;
  const getState = React.useCallback(() => {
    const currentState = getCurrentState();
    return isStateInitialized(currentState) ? currentState : initializedStateRef.current;
  }, [getCurrentState, isStateInitialized]);
  const emitter = (0, _useEventEmitter.default)(e => {
    let routeNames = [];
    let route;

    if (e.target) {
      var _route;

      route = state.routes.find(route => route.key === e.target);

      if ((_route = route) === null || _route === void 0 ? void 0 : _route.name) {
        routeNames.push(route.name);
      }
    } else {
      route = state.routes[state.index];
      routeNames.push(...Object.keys(screens).filter(name => {
        var _route2;

        return ((_route2 = route) === null || _route2 === void 0 ? void 0 : _route2.name) === name;
      }));
    }

    if (route == null) {
      return;
    }

    const navigation = descriptors[route.key].navigation;
    const listeners = [].concat(...routeNames.map(name => {
      const {
        listeners
      } = screens[name];
      const map = typeof listeners === 'function' ? listeners({
        route: route,
        navigation
      }) : listeners;
      return map ? Object.keys(map).filter(type => type === e.type).map(type => map === null || map === void 0 ? void 0 : map[type]) : undefined;
    })).filter((cb, i, self) => cb && self.lastIndexOf(cb) === i);
    listeners.forEach(listener => listener === null || listener === void 0 ? void 0 : listener(e));
  });
  (0, _useFocusEvents.default)({
    state,
    emitter
  });
  React.useEffect(() => {
    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });
  }, [emitter, state]);
  const {
    listeners: childListeners,
    addListener
  } = (0, _useChildListeners.default)();
  const {
    keyedListeners,
    addKeyedListener
  } = (0, _useKeyedChildListeners.default)();
  const onAction = (0, _useOnAction.default)({
    router,
    getState,
    setState,
    key: route === null || route === void 0 ? void 0 : route.key,
    actionListeners: childListeners.action,
    beforeRemoveListeners: keyedListeners.beforeRemove,
    routerConfigOptions: {
      routeNames,
      routeParamList
    },
    emitter
  });
  const onRouteFocus = (0, _useOnRouteFocus.default)({
    router,
    key: route === null || route === void 0 ? void 0 : route.key,
    getState,
    setState
  });
  const navigation = (0, _useNavigationHelpers.default)({
    onAction,
    getState,
    emitter,
    router
  });
  (0, _useFocusedListenersChildrenAdapter.default)({
    navigation,
    focusedListeners: childListeners.focus
  });
  (0, _useOnGetState.default)({
    getState,
    getStateListeners: keyedListeners.getState
  });
  const descriptors = (0, _useDescriptors.default)({
    state,
    screens,
    navigation,
    screenOptions: options.screenOptions,
    onAction,
    getState,
    setState,
    onRouteFocus,
    addListener,
    addKeyedListener,
    router,
    emitter
  });
  (0, _useCurrentRender.default)({
    state,
    navigation,
    descriptors
  });
  return {
    state,
    navigation,
    descriptors
  };
}
//# sourceMappingURL=useNavigationBuilder.js.map