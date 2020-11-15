import { ResizeMode, Arguments, StatusBarOptions } from '../constants';
export default function configureIos(projectRootPath: string, { resizeMode, backgroundColor, darkModeBackgroundColor, imagePath, darkModeImagePath, statusBarHidden, statusBarStyle, }: Arguments & Partial<StatusBarOptions> & {
    resizeMode: ResizeMode;
}): Promise<void>;
