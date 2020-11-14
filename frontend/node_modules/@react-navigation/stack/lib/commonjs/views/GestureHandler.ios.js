"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GestureHandlerNative = require("./GestureHandlerNative");

Object.keys(_GestureHandlerNative).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GestureHandlerNative[key];
    }
  });
});
//# sourceMappingURL=GestureHandler.ios.js.map