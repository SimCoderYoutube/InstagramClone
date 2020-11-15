import * as React from 'react';
import NavigationStateContext from './NavigationStateContext';
import NavigationBuilderContext from './NavigationBuilderContext';
export default function useOptionsGetters({
  key,
  options,
  navigation
}) {
  const optionsRef = React.useRef(options);
  const optionsGettersFromChildRef = React.useRef({});
  const {
    onOptionsChange
  } = React.useContext(NavigationBuilderContext);
  const {
    addOptionsGetter: parentAddOptionsGetter
  } = React.useContext(NavigationStateContext);
  const optionsChangeListener = React.useCallback(() => {
    var _navigation$isFocused;

    const isFocused = (_navigation$isFocused = navigation === null || navigation === void 0 ? void 0 : navigation.isFocused()) !== null && _navigation$isFocused !== void 0 ? _navigation$isFocused : true;
    const hasChildren = Object.keys(optionsGettersFromChildRef.current).length;

    if (isFocused && !hasChildren) {
      var _optionsRef$current;

      onOptionsChange((_optionsRef$current = optionsRef.current) !== null && _optionsRef$current !== void 0 ? _optionsRef$current : {});
    }
  }, [navigation, onOptionsChange]);
  React.useEffect(() => {
    optionsRef.current = options;
    optionsChangeListener();
    return navigation === null || navigation === void 0 ? void 0 : navigation.addListener('focus', optionsChangeListener);
  }, [navigation, options, optionsChangeListener]);
  const getOptionsFromListener = React.useCallback(() => {
    for (let key in optionsGettersFromChildRef.current) {
      if (optionsGettersFromChildRef.current.hasOwnProperty(key)) {
        var _optionsGettersFromCh, _optionsGettersFromCh2;

        const result = (_optionsGettersFromCh = (_optionsGettersFromCh2 = optionsGettersFromChildRef.current)[key]) === null || _optionsGettersFromCh === void 0 ? void 0 : _optionsGettersFromCh.call(_optionsGettersFromCh2); // null means unfocused route

        if (result !== null) {
          return result;
        }
      }
    }

    return null;
  }, []);
  const getCurrentOptions = React.useCallback(() => {
    var _navigation$isFocused2;

    const isFocused = (_navigation$isFocused2 = navigation === null || navigation === void 0 ? void 0 : navigation.isFocused()) !== null && _navigation$isFocused2 !== void 0 ? _navigation$isFocused2 : true;

    if (!isFocused) {
      return null;
    }

    const optionsFromListener = getOptionsFromListener();

    if (optionsFromListener !== null) {
      return optionsFromListener;
    }

    return optionsRef.current;
  }, [navigation, getOptionsFromListener]);
  React.useEffect(() => {
    return parentAddOptionsGetter === null || parentAddOptionsGetter === void 0 ? void 0 : parentAddOptionsGetter(key, getCurrentOptions);
  }, [getCurrentOptions, parentAddOptionsGetter, key]);
  const addOptionsGetter = React.useCallback((key, getter) => {
    optionsGettersFromChildRef.current[key] = getter;
    optionsChangeListener();
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete optionsGettersFromChildRef.current[key];
      optionsChangeListener();
    };
  }, [optionsChangeListener]);
  return {
    addOptionsGetter,
    getCurrentOptions
  };
}
//# sourceMappingURL=useOptionsGetters.js.map