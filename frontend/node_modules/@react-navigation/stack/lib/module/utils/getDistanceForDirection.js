import getInvertedMultiplier from './getInvertedMultiplier';
export default function getDistanceForDirection(layout, gestureDirection) {
  const multiplier = getInvertedMultiplier(gestureDirection);

  switch (gestureDirection) {
    case 'vertical':
    case 'vertical-inverted':
      return layout.height * multiplier;

    case 'horizontal':
    case 'horizontal-inverted':
      return layout.width * multiplier;
  }
}
//# sourceMappingURL=getDistanceForDirection.js.map