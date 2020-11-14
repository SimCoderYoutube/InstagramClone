import { I18nManager } from 'react-native';
export default function getInvertedMultiplier(gestureDirection) {
  switch (gestureDirection) {
    case 'vertical':
      return 1;

    case 'vertical-inverted':
      return -1;

    case 'horizontal':
      return I18nManager.isRTL ? -1 : 1;

    case 'horizontal-inverted':
      return I18nManager.isRTL ? 1 : -1;
  }
}
//# sourceMappingURL=getInvertedMultiplier.js.map