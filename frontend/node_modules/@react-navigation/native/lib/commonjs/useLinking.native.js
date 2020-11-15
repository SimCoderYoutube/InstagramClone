"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLinking;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _core = require("@react-navigation/core");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let isUsingLinking = false;

function useLinking(ref, {
  enabled = true,
  prefixes,
  config,
  getStateFromPath = _core.getStateFromPath
}) {
  React.useEffect(() => {
    if (enabled !== false && isUsingLinking) {
      throw new Error(['Looks like you have configured linking in multiple places. This is likely an error since deep links should only be handled in one place to avoid conflicts. Make sure that:', "- You are not using both 'linking' prop and 'useLinking'", "- You don't have 'useLinking' in multiple components", _reactNative.Platform.OS === 'android' ? "- You have set 'android:launchMode=singleTask' in the '<activity />' section of the 'AndroidManifest.xml' file to avoid launching multiple instances" : ''].join('\n').trim());
    } else {
      isUsingLinking = enabled !== false;
    }

    return () => {
      isUsingLinking = false;
    };
  }); // We store these options in ref to avoid re-creating getInitialState and re-subscribing listeners
  // This lets user avoid wrapping the items in `React.useCallback` or `React.useMemo`
  // Not re-creating `getInitialState` is important coz it makes it easier for the user to use in an effect

  const enabledRef = React.useRef(enabled);
  const prefixesRef = React.useRef(prefixes);
  const configRef = React.useRef(config);
  const getStateFromPathRef = React.useRef(getStateFromPath);
  React.useEffect(() => {
    enabledRef.current = enabled;
    prefixesRef.current = prefixes;
    configRef.current = config;
    getStateFromPathRef.current = getStateFromPath;
  }, [config, enabled, getStateFromPath, prefixes]);
  const extractPathFromURL = React.useCallback(url => {
    for (const prefix of prefixesRef.current) {
      if (url.startsWith(prefix)) {
        return url.replace(prefix, '');
      }
    }

    return undefined;
  }, []);
  const getInitialState = React.useCallback(async () => {
    if (!enabledRef.current) {
      return undefined;
    }

    const url = await Promise.race([_reactNative.Linking.getInitialURL(), new Promise(resolve => // Timeout in 150ms if `getInitialState` doesn't resolve
    // Workaround for https://github.com/facebook/react-native/issues/25675
    setTimeout(resolve, 150))]);
    const path = url ? extractPathFromURL(url) : null;

    if (path) {
      return getStateFromPathRef.current(path, configRef.current);
    } else {
      return undefined;
    }
  }, [extractPathFromURL]);
  React.useEffect(() => {
    const listener = ({
      url
    }) => {
      if (!enabled) {
        return;
      }

      const path = extractPathFromURL(url);
      const navigation = ref.current;

      if (navigation && path) {
        const state = getStateFromPathRef.current(path, configRef.current);

        if (state) {
          const action = (0, _core.getActionFromState)(state);

          if (action !== undefined) {
            navigation.dispatch(action);
          } else {
            navigation.resetRoot(state);
          }
        }
      }
    };

    _reactNative.Linking.addEventListener('url', listener);

    return () => _reactNative.Linking.removeEventListener('url', listener);
  }, [enabled, extractPathFromURL, ref]);
  return {
    getInitialState
  };
}
//# sourceMappingURL=useLinking.native.js.map