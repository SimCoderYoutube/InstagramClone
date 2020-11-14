function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Surface from './Surface';
import Text from './Typography/Text';
import Button from './Button';
import Icon from './Icon';
import { withTheme } from '../core/theming';
import shadow from '../styles/shadow';
const ELEVATION = 1;
const DEFAULT_MAX_WIDTH = 960;

/**
 * Banner displays a prominent message and related actions.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/banner.gif" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Image } from 'react-native';
 * import { Banner } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(true);
 *
 *   return (
 *     <Banner
 *       visible={visible}
 *       actions={[
 *         {
 *           label: 'Fix it',
 *           onPress: () => setVisible(false),
 *         },
 *         {
 *           label: 'Learn more',
 *           onPress: () => setVisible(false),
 *         },
 *       ]}
 *       icon={({size}) => (
 *         <Image
 *           source={{
 *             uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
 *           }}
 *           style={{
 *             width: size,
 *             height: size,
 *           }}
 *         />
 *       )}>
 *       There was a problem processing a transaction on your credit card.
 *     </Banner>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const Banner = (_ref) => {
  let {
    visible,
    icon,
    children,
    actions,
    contentStyle,
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["visible", "icon", "children", "actions", "contentStyle", "style", "theme"]);

  const {
    current: position
  } = React.useRef(new Animated.Value(visible ? 1 : 0));
  const [layout, setLayout] = React.useState({
    height: 0,
    measured: false
  });
  const {
    scale
  } = theme.animation;
  React.useEffect(() => {
    if (visible) {
      // show
      Animated.timing(position, {
        duration: 250 * scale,
        toValue: 1,
        useNativeDriver: false
      }).start();
    } else {
      // hide
      Animated.timing(position, {
        duration: 200 * scale,
        toValue: 0,
        useNativeDriver: false
      }).start();
    }
  }, [visible, position, scale]);

  const handleLayout = ({
    nativeEvent
  }) => {
    const {
      height
    } = nativeEvent.layout;
    setLayout({
      height,
      measured: true
    });
  }; // The banner animation has 2 parts:
  // 1. Blank spacer element which animates its height to move the content
  // 2. Actual banner which animates its translateY
  // In initial render, we position everything normally and measure the height of the banner
  // Once we have the height, we apply the height to the spacer and switch the banner to position: absolute
  // We need this because we need to move the content below as if banner's height was being animated
  // However we can't animated banner's height directly as it'll also resize the content inside


  const height = Animated.multiply(position, layout.height);
  const translateY = Animated.multiply(Animated.add(position, -1), layout.height);
  return /*#__PURE__*/React.createElement(Surface, _extends({}, rest, {
    style: [styles.container, shadow(ELEVATION), style]
  }), /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, contentStyle]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: {
      height
    }
  }), /*#__PURE__*/React.createElement(Animated.View, {
    onLayout: handleLayout,
    style: [layout.measured || !visible ? // If we have measured banner's height or it's invisible,
    // Position it absolutely, the layout will be taken care of the spacer
    [styles.absolute, {
      transform: [{
        translateY
      }]
    }] : // Otherwise position it normally
    null, !layout.measured && !visible ? // If we haven't measured banner's height yet and it's invisible,
    // hide it with opacity: 0 so user doesn't see it
    {
      opacity: 0
    } : null]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, icon ? /*#__PURE__*/React.createElement(View, {
    style: styles.icon
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: 40
  })) : null, /*#__PURE__*/React.createElement(Text, {
    style: styles.message
  }, children)), /*#__PURE__*/React.createElement(View, {
    style: styles.actions
  }, actions.map((_ref2, i) => {
    let {
      label
    } = _ref2,
        others = _objectWithoutProperties(_ref2, ["label"]);

    return /*#__PURE__*/React.createElement(Button, _extends({
      key:
      /* eslint-disable-line react/no-array-index-key */
      i,
      compact: true,
      mode: "text",
      style: styles.button
    }, others), label);
  })))));
};

const styles = StyleSheet.create({
  container: {
    elevation: ELEVATION
  },
  wrapper: {
    overflow: 'hidden',
    alignSelf: 'center',
    width: '100%',
    maxWidth: DEFAULT_MAX_WIDTH
  },
  absolute: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 8,
    marginTop: 16,
    marginBottom: 0
  },
  icon: {
    margin: 8
  },
  message: {
    flex: 1,
    margin: 8
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 4
  },
  button: {
    margin: 4
  }
});
export default withTheme(Banner);
//# sourceMappingURL=Banner.js.map