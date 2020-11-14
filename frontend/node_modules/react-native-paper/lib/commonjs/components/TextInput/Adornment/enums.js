"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputMode = exports.AdornmentSide = exports.AdornmentType = void 0;
let AdornmentType;
exports.AdornmentType = AdornmentType;

(function (AdornmentType) {
  AdornmentType["Icon"] = "icon";
  AdornmentType["Affix"] = "affix";
})(AdornmentType || (exports.AdornmentType = AdornmentType = {}));

let AdornmentSide;
exports.AdornmentSide = AdornmentSide;

(function (AdornmentSide) {
  AdornmentSide["Right"] = "right";
  AdornmentSide["Left"] = "left";
})(AdornmentSide || (exports.AdornmentSide = AdornmentSide = {}));

let InputMode;
exports.InputMode = InputMode;

(function (InputMode) {
  InputMode["Outlined"] = "outlined";
  InputMode["Flat"] = "flat";
})(InputMode || (exports.InputMode = InputMode = {}));
//# sourceMappingURL=enums.js.map