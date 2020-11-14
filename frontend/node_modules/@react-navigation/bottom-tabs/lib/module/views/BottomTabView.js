function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationHelpersContext, useTheme } from '@react-navigation/native';
import { ScreenContainer } from 'react-native-screens';
import SafeAreaProviderCompat from './SafeAreaProviderCompat';
import ResourceSavingScene from './ResourceSavingScene';
import BottomTabBar from './BottomTabBar';

function SceneContent({
  isFocused,
  children
}) {
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(View, {
    accessibilityElementsHidden: !isFocused,
    importantForAccessibility: isFocused ? 'auto' : 'no-hide-descendants',
    style: [styles.content, {
      backgroundColor: colors.background
    }]
  }, children);
}

export default class BottomTabView extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loaded: [this.props.state.index]
    });

    _defineProperty(this, "renderTabBar", () => {
      const {
        tabBar = props => /*#__PURE__*/React.createElement(BottomTabBar, props),
        tabBarOptions,
        state,
        navigation,
        descriptors
      } = this.props;
      return tabBar(_objectSpread(_objectSpread({}, tabBarOptions), {}, {
        state: state,
        descriptors: descriptors,
        navigation: navigation
      }));
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      index
    } = nextProps.state;
    return {
      // Set the current tab to be loaded if it was not loaded before
      loaded: prevState.loaded.includes(index) ? prevState.loaded : [...prevState.loaded, index]
    };
  }

  render() {
    const {
      state,
      descriptors,
      navigation,
      lazy
    } = this.props;
    const {
      routes
    } = state;
    const {
      loaded
    } = this.state;
    return /*#__PURE__*/React.createElement(NavigationHelpersContext.Provider, {
      value: navigation
    }, /*#__PURE__*/React.createElement(SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(View, {
      style: styles.container
    }, /*#__PURE__*/React.createElement(ScreenContainer, {
      style: styles.pages
    }, routes.map((route, index) => {
      const descriptor = descriptors[route.key];
      const {
        unmountOnBlur
      } = descriptor.options;
      const isFocused = state.index === index;

      if (unmountOnBlur && !isFocused) {
        return null;
      }

      if (lazy && !loaded.includes(index) && !isFocused) {
        // Don't render a screen if we've never navigated to it
        return null;
      }

      return /*#__PURE__*/React.createElement(ResourceSavingScene, {
        key: route.key,
        style: StyleSheet.absoluteFill,
        isVisible: isFocused
      }, /*#__PURE__*/React.createElement(SceneContent, {
        isFocused: isFocused
      }, descriptor.render()));
    })), this.renderTabBar())));
  }

}

_defineProperty(BottomTabView, "defaultProps", {
  lazy: true
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  pages: {
    flex: 1
  },
  content: {
    flex: 1
  }
});
//# sourceMappingURL=BottomTabView.js.map