function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { NavigationHelpersContext, getPathFromState } from '@react-navigation/core';
import LinkingContext from './LinkingContext';

const getRootStateForNavigate = (navigation, state) => {
  const parent = navigation.dangerouslyGetParent();

  if (parent) {
    const parentState = parent.dangerouslyGetState();
    return getRootStateForNavigate(parent, {
      index: 0,
      routes: [_objectSpread(_objectSpread({}, parentState.routes[parentState.index]), {}, {
        state: state
      })]
    });
  }

  return state;
};
/**
 * Build destination link for a navigate action.
 * Useful for showing anchor tags on the web for buttons that perform navigation.
 */


export default function useLinkBuilder() {
  const navigation = React.useContext(NavigationHelpersContext);
  const linking = React.useContext(LinkingContext);
  const buildLink = React.useCallback((name, params) => {
    const {
      options
    } = linking;

    if ((options === null || options === void 0 ? void 0 : options.enabled) === false) {
      return undefined;
    }

    const state = navigation ? getRootStateForNavigate(navigation, {
      index: 0,
      routes: [{
        name,
        params
      }]
    }) : // If we couldn't find a navigation object in context, we're at root
    // So we'll construct a basic state object to use
    {
      index: 0,
      routes: [{
        name,
        params
      }]
    };
    const path = (options === null || options === void 0 ? void 0 : options.getPathFromState) ? options.getPathFromState(state, options === null || options === void 0 ? void 0 : options.config) : getPathFromState(state, options === null || options === void 0 ? void 0 : options.config);
    return path;
  }, [linking, navigation]);
  return buildLink;
}
//# sourceMappingURL=useLinkBuilder.js.map