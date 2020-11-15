"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useOptionsGetters;

var React = _interopRequireWildcard(require("react"));

var _NavigationStateContext = _interopRequireDefault(require("./NavigationStateContext"));

var _NavigationBuilderContext = _interopRequireDefault(require("./NavigationBuilderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useOptionsGetters({
  key,
  options,
  navigation
}) {
  const optionsRef = React.useRef(options);
  const optionsGettersFromChildRef = React.useRef({});
  const {
    onOptionsChange
  } = React.useContext(_NavigationBuilderContext.default);
  const {
    addOptionsGetter: parentAddOptionsGetter
  } = React.useContext(_NavigationStateContext.default);
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