"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _routers = require("@react-navigation/routers");

var _EnsureSingleNavigator = _interopRequireDefault(require("./EnsureSingleNavigator"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

var _UnhandledActionContext = _interopRequireDefault(require("./UnhandledActionContext"));

var _useScheduleUpdate = require("./useScheduleUpdate");

var _useChildListeners = _interopRequireDefault(require("./useChildListeners"));

var _useKeyedChildListeners = _interopRequireDefault(require("./useKeyedChildListeners"));

var _useOptionsGetters = _interopRequireDefault(require("./useOptionsGetters"));

var _useEventEmitter = _interopRequireDefault(require("./useEventEmitter"));

var _useSyncState = _interopRequireDefault(require("./useSyncState"));

var _checkSerializable = _interopRequireDefault(require("./checkSerializable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
const serializableWarnings = [];

try {
  /**
   * Migration instructions for removal of devtools from core
   */
  Object.defineProperty(global, 'REACT_NAVIGATION_REDUX_DEVTOOLS_EXTENSION_INTEGRATION_ENABLED', {
    set(_) {
      console.warn("Redux devtools extension integration can be enabled with the '@react-navigation/devtools' package. For more details, see https://reactnavigation.org/docs/devtools");
    }

  });
} catch (e) {} // Ignore

/**
 * Remove `key` and `routeNames` from the state objects recursively to get partial state.
 *
 * @param state Initial state object.
 */


const getPartialState = state => {
  if (state === undefined) {
    return;
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const {
    key,
    routeNames
  } = state,
        partialState = _objectWithoutProperties(state, ["key", "routeNames"]);

  return _objectSpread(_objectSpread({}, partialState), {}, {
    stale: true,
    routes: state.routes.map(route => {
      if (route.state === undefined) {
        return route;
      }

      return _objectSpread(_objectSpread({}, route), {}, {
        state: getPartialState(route.state)
      });
    })
  });
};
/**
 * Container component which holds the navigation state.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */


const BaseNavigationContainer = /*#__PURE__*/React.forwardRef(function BaseNavigationContainer({
  initialState,
  onStateChange,
  independent,
  children
}, ref) {
  const parent = React.useContext(_NavigationStateContext.default);

  if (!parent.isDefault && !independent) {
    throw new Error("Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitely. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.");
  }

  const [state, getState, setState, scheduleUpdate, flushUpdates] = (0, _useSyncState.default)(() => getPartialState(initialState == null ? undefined : initialState));
  const isFirstMountRef = React.useRef(true);
  const navigatorKeyRef = React.useRef();
  const getKey = React.useCallback(() => navigatorKeyRef.current, []);
  const setKey = React.useCallback(key => {
    navigatorKeyRef.current = key;
  }, []);
  const {
    listeners,
    addListener
  } = (0, _useChildListeners.default)();
  const {
    keyedListeners,
    addKeyedListener
  } = (0, _useKeyedChildListeners.default)();

  const dispatch = action => {
    if (listeners.focus[0] == null) {
      throw new Error(NOT_INITIALIZED_ERROR);
    }

    listeners.focus[0](navigation => navigation.dispatch(action));
  };

  const canGoBack = () => {
    if (listeners.focus[0] == null) {
      return false;
    }

    const {
      result,
      handled
    } = listeners.focus[0](navigation => navigation.canGoBack());

    if (handled) {
      return result;
    } else {
      return false;
    }
  };

  const resetRoot = React.useCallback(state => {
    setState(state);
  }, [setState]);
  const getRootState = React.useCallback(() => {
    var _keyedListeners$getSt, _keyedListeners$getSt2;

    return (_keyedListeners$getSt = (_keyedListeners$getSt2 = keyedListeners.getState).root) === null || _keyedListeners$getSt === void 0 ? void 0 : _keyedListeners$getSt.call(_keyedListeners$getSt2);
  }, [keyedListeners.getState]);
  const getCurrentRoute = React.useCallback(() => {
    let state = getRootState();

    if (state === undefined) {
      return undefined;
    }

    while (state.routes[state.index].state !== undefined) {
      state = state.routes[state.index].state;
    }

    return state.routes[state.index];
  }, [getRootState]);
  const emitter = (0, _useEventEmitter.default)();
  const {
    addOptionsGetter,
    getCurrentOptions
  } = (0, _useOptionsGetters.default)({});
  React.useImperativeHandle(ref, () => _objectSpread(_objectSpread(_objectSpread({}, Object.keys(_routers.CommonActions).reduce((acc, name) => {
    acc[name] = (...args) => dispatch(_routers.CommonActions[name]( // @ts-expect-error: we can't know the type statically
    ...args));

    return acc;
  }, {})), emitter.create('root')), {}, {
    resetRoot,
    dispatch,
    canGoBack,
    getRootState,
    dangerouslyGetState: () => state,
    dangerouslyGetParent: () => undefined,
    getCurrentRoute,
    getCurrentOptions
  }));
  const onDispatchAction = React.useCallback((action, noop) => {
    emitter.emit({
      type: '__unsafe_action__',
      data: {
        action,
        noop
      }
    });
  }, [emitter]);
  const lastEmittedOptionsRef = React.useRef();
  const onOptionsChange = React.useCallback(options => {
    if (lastEmittedOptionsRef.current === options) {
      return;
    }

    lastEmittedOptionsRef.current = options;
    emitter.emit({
      type: 'options',
      data: {
        options
      }
    });
  }, [emitter]);
  const builderContext = React.useMemo(() => ({
    addListener,
    addKeyedListener,
    onDispatchAction,
    onOptionsChange
  }), [addListener, addKeyedListener, onDispatchAction, onOptionsChange]);
  const scheduleContext = React.useMemo(() => ({
    scheduleUpdate,
    flushUpdates
  }), [scheduleUpdate, flushUpdates]);
  const isInitialRef = React.useRef(true);
  const getIsInitial = React.useCallback(() => isInitialRef.current, []);
  const context = React.useMemo(() => ({
    state,
    getState,
    setState,
    getKey,
    setKey,
    getIsInitial,
    addOptionsGetter
  }), [state, getState, setState, getKey, setKey, getIsInitial, addOptionsGetter]);
  const onStateChangeRef = React.useRef(onStateChange);
  React.useEffect(() => {
    isInitialRef.current = false;
    onStateChangeRef.current = onStateChange;
  });
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      if (state !== undefined) {
        const result = (0, _checkSerializable.default)(state);

        if (!result.serializable) {
          const {
            location,
            reason
          } = result;
          let path = '';
          let pointer = state;
          let params = false;

          for (let i = 0; i < location.length; i++) {
            const curr = location[i];
            const prev = location[i - 1];
            pointer = pointer[curr];

            if (!params && curr === 'state') {
              continue;
            } else if (!params && curr === 'routes') {
              if (path) {
                path += ' > ';
              }
            } else if (!params && typeof curr === 'number' && prev === 'routes') {
              var _pointer;

              path += (_pointer = pointer) === null || _pointer === void 0 ? void 0 : _pointer.name;
            } else if (!params) {
              path += " > ".concat(curr);
              params = true;
            } else {
              if (typeof curr === 'number' || /^[0-9]+$/.test(curr)) {
                path += "[".concat(curr, "]");
              } else if (/^[a-z$_]+$/i.test(curr)) {
                path += ".".concat(curr);
              } else {
                path += "[".concat(JSON.stringify(curr), "]");
              }
            }
          }

          const message = "Non-serializable values were found in the navigation state. Check:\n\n".concat(path, " (").concat(reason, ")\n\nThis can break usage such as persisting and restoring state. This might happen if you passed non-serializable values such as function, class instances etc. in params. If you need to use components with callbacks in your options, you can use 'navigation.setOptions' instead. See https://reactnavigation.org/docs/troubleshooting#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state for more details.");

          if (!serializableWarnings.includes(message)) {
            serializableWarnings.push(message);
            console.warn(message);
          }
        }
      }
    }

    emitter.emit({
      type: 'state',
      data: {
        state
      }
    });

    if (!isFirstMountRef.current && onStateChangeRef.current) {
      onStateChangeRef.current(getRootState());
    }

    isFirstMountRef.current = false;
  }, [getRootState, emitter, state]);
  const onUnhandledAction = React.useCallback(action => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const payload = action.payload;
    let message = "The action '".concat(action.type, "'").concat(payload ? " with payload ".concat(JSON.stringify(action.payload)) : '', " was not handled by any navigator.");

    switch (action.type) {
      case 'NAVIGATE':
      case 'PUSH':
      case 'REPLACE':
      case 'JUMP_TO':
        if (payload === null || payload === void 0 ? void 0 : payload.name) {
          message += "\n\nDo you have a screen named '".concat(payload.name, "'?\n\nIf you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.");
        } else {
          message += "\n\nYou need to pass the name of the screen to navigate to.\n\nSee https://reactnavigation.org/docs/navigation-actions for usage.";
        }

        break;

      case 'GO_BACK':
      case 'POP':
      case 'POP_TO_TOP':
        message += "\n\nIs there any screen to go back to?";
        break;

      case 'OPEN_DRAWER':
      case 'CLOSE_DRAWER':
      case 'TOGGLE_DRAWER':
        message += "\n\nIs your screen inside a Drawer navigator?";
        break;
    }

    message += "\n\nThis is a development-only warning and won't be shown in production.";
    console.error(message);
  }, []);
  return /*#__PURE__*/React.createElement(_useScheduleUpdate.ScheduleUpdateContext.Provider, {
    value: scheduleContext
  }, /*#__PURE__*/React.createElement(_NavigationBuilderContext.default.Provider, {
    value: builderContext
  }, /*#__PURE__*/React.createElement(_NavigationStateContext.default.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement(_UnhandledActionContext.default.Provider, {
    value: onUnhandledAction
  }, /*#__PURE__*/React.createElement(_EnsureSingleNavigator.default, null, children)))));
});
var _default = BaseNavigationContainer;
exports.default = _default;
//# sourceMappingURL=BaseNavigationContainer.js.map