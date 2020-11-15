import { ResizeMode, Arguments, StatusBarOptions, AndroidOnlyStatusBarOptions } from '../constants';
export default function configureAndroid(projectRootPath: string, { resizeMode, backgroundColor, darkModeBackgroundColor, imagePath, darkModeImagePath, statusBarHidden, statusBarStyle, darkModeStatusBarStyle, statusBarTranslucent, statusBarBackgroundColor, darkModeStatusBarBackgroundColor, }: Arguments & Partial<StatusBarOptions> & Partial<AndroidOnlyStatusBarOptions> & {
    resizeMode: ResizeMode;
}): Promise<void>;
