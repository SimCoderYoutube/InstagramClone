"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDistanceForDirection;

var _getInvertedMultiplier = _interopRequireDefault(require("./getInvertedMultiplier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDistanceForDirection(layout, gestureDirection) {
  const multiplier = (0, _getInvertedMultiplier.default)(gestureDirection);

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