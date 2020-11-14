import { ColorDescriptor } from 'color-string';
/**
 * @param androidMainPath Path to the main directory containing code and resources in Android project. In general that would be `android/app/src/main`.
 */
export default function configureColorsXml(androidMainPath: string, { backgroundColor, darkModeBackgroundColor, statusBarBackgroundColor, darkModeStatusBarBackgroundColor, }: {
    backgroundColor: ColorDescriptor;
    darkModeBackgroundColor?: ColorDescriptor;
    statusBarBackgroundColor?: ColorDescriptor;
    darkModeStatusBarBackgroundColor?: ColorDescriptor;
}): Promise<void>;
