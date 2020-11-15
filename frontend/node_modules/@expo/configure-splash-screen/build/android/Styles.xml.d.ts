import { StatusBarStyle } from '../constants';
/**
 * @param androidMainPath Path to the main directory containing code and resources in Android project. In general that would be `android/app/src/main`.
 */
export default function configureStylesXml(androidMainPath: string, { statusBarHidden, statusBarStyle, darkModeStatusBarStyle, addStatusBarBackgroundColor, }?: {
    statusBarHidden?: boolean;
    statusBarStyle?: StatusBarStyle;
    darkModeStatusBarStyle?: StatusBarStyle;
    addStatusBarBackgroundColor?: boolean;
}): Promise<void>;
