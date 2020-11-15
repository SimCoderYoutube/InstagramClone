"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerRouter;
exports.DrawerActions = void 0;

var _nonSecure = require("nanoid/non-secure");

var _TabRouter = _interopRequireWildcard(require("./TabRouter"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DrawerActions = _objectSpread(_objectSpread({}, _TabRouter.TabActions), {}, {
  openDrawer() {
    return {
      type: 'OPEN_DRAWER'
    };
  },

  closeDrawer() {
    return {
      type: 'CLOSE_DRAWER'
    };
  },

  toggleDrawer() {
    return {
      type: 'TOGGLE_DRAWER'
    };
  }

});

exports.DrawerActions = DrawerActions;

const isDrawerOpen = state => {
  var _state$history;

  return Boolean((_state$history = state.history) === null || _state$history === void 0 ? void 0 : _state$history.find(it => it.type === 'drawer'));
};

const openDrawer = state => {
  if (isDrawerOpen(state)) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    history: [...state.history, {
      type: 'drawer'
    }]
  });
};

const closeDrawer = state => {
  if (!isDrawerOpen(state)) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    history: state.history.filter(it => it.type !== 'drawer')
  });
};

function DrawerRouter(_ref) {
  let {
    openByDefault
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["openByDefault"]);

  const router = (0, _TabRouter.default)(rest);
  return _objectSpread(_objectSpread({}, router), {}, {
    type: 'drawer',

    getInitialState({
      routeNames,
      routeParamList
    }) {
      let state = router.getInitialState({
        routeNames,
        routeParamList
      });

      if (openByDefault) {
        state = openDrawer(state);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        stale: false,
        type: 'drawer',
        key: "drawer-".concat((0, _nonSecure.nanoid)())
      });
    },

    getRehydratedState(partialState, {
      routeNames,
      routeParamList
    }) {
      if (partialState.stale === false) {
        return partialState;
      }

      let state = router.getRehydratedState(partialState, {
        routeNames,
        routeParamList
      });

      if (isDrawerOpen(partialState)) {
        state = openDrawer(state);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        type: 'drawer',
        key: "drawer-".concat((0, _nonSecure.nanoid)())
      });
    },

    getStateForRouteFocus(state, key) {
      const result = router.getStateForRouteFocus(state, key);

      if (openByDefault) {
        return openDrawer(result);
      }

      return closeDrawer(result);
    },

    getStateForAction(state, action, options) {
      switch (action.type) {
        case 'OPEN_DRAWER':
          return openDrawer(state);

        case 'CLOSE_DRAWER':
          return closeDrawer(state);

        case 'TOGGLE_DRAWER':
          if (isDrawerOpen(state)) {
            return closeDrawer(state);
          }

          return openDrawer(state);

        case 'GO_BACK':
          if (openByDefault) {
            if (!isDrawerOpen(state)) {
              return openDrawer(state);
            }
          } else {
            if (isDrawerOpen(state)) {
              return closeDrawer(state);
            }
          }

          return router.getStateForAction(state, action, options);

        default:
          return router.getStateForAction(state, action, options);
      }
    },

    actionCreators: DrawerActions
  });
}
//# sourceMappingURL=DrawerRouter.js.map