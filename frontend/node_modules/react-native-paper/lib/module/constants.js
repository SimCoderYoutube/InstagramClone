import { Platform } from 'react-native'; // @ts-ignore

const expo = global.__expo;
const DEFAULT_STATUSBAR_HEIGHT_EXPO = (expo === null || expo === void 0 ? void 0 : expo.Constants) ? expo.Constants.statusBarHeight : 0;
export const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: DEFAULT_STATUSBAR_HEIGHT_EXPO,
  ios: Platform.Version < 11 ? DEFAULT_STATUSBAR_HEIGHT_EXPO : 0
});
//# sourceMappingURL=constants.js.map