"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const AndroidManifest_xml_1 = __importDefault(require("./AndroidManifest.xml"));
const Colors_xml_1 = __importDefault(require("./Colors.xml"));
const Drawable_xml_1 = __importDefault(require("./Drawable.xml"));
const Drawables_1 = __importDefault(require("./Drawables"));
const MainActivity_1 = __importDefault(require("./MainActivity"));
const Styles_xml_1 = __importDefault(require("./Styles.xml"));
async function configureAndroid(projectRootPath, { resizeMode, backgroundColor, darkModeBackgroundColor, imagePath, darkModeImagePath, statusBarHidden, statusBarStyle, darkModeStatusBarStyle, statusBarTranslucent, statusBarBackgroundColor, darkModeStatusBarBackgroundColor, }) {
    const androidMainPath = path_1.default.resolve(projectRootPath, 'android/app/src/main');
    await Promise.all([
        Drawables_1.default(androidMainPath, imagePath, darkModeImagePath),
        Colors_xml_1.default(androidMainPath, {
            backgroundColor,
            darkModeBackgroundColor,
            statusBarBackgroundColor,
            darkModeStatusBarBackgroundColor,
        }),
        Drawable_xml_1.default(androidMainPath, resizeMode),
        Styles_xml_1.default(androidMainPath, {
            statusBarHidden,
            statusBarStyle,
            darkModeStatusBarStyle,
            addStatusBarBackgroundColor: !!statusBarBackgroundColor,
        }),
        AndroidManifest_xml_1.default(androidMainPath),
        MainActivity_1.default(projectRootPath, resizeMode, statusBarTranslucent),
    ]);
}
exports.default = configureAndroid;
//# sourceMappingURL=index.js.map