function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { withTheme } from '../../core/theming';
import { grey200 } from '../../styles/colors';

/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://facebook.github.io/react-native/docs/image.html#props
 */
const CardCover = (_ref) => {
  let {
    index,
    total,
    style,
    theme
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["index", "total", "style", "theme"]);

  const {
    roundness
  } = theme;
  let coverStyle;

  if (index === 0) {
    if (total === 1) {
      coverStyle = {
        borderRadius: roundness
      };
    } else {
      coverStyle = {
        borderTopLeftRadius: roundness,
        borderTopRightRadius: roundness
      };
    }
  } else if (typeof total === 'number' && index === total - 1) {
    coverStyle = {
      borderBottomLeftRadius: roundness
    };
  }

  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, coverStyle, style]
  }, /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
    style: [styles.image, coverStyle]
  })));
};

CardCover.displayName = 'Card.Cover';
const styles = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: grey200,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 16,
    justifyContent: 'flex-end',
    resizeMode: 'cover'
  }
});
export default withTheme(CardCover); // @component-docs ignore-next-line

export { CardCover };
//# sourceMappingURL=CardCover.js.map