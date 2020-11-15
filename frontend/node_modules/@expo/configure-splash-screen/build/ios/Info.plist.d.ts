import { StatusBarOptions } from '../constants';
/**
 * Configures [INFO_PLIST] to show [STORYBOARD] filename as Splash/Launch Screen.
 */
export default function configureInfoPlist(iosProjectPath: string, { statusBarHidden, statusBarStyle }?: Partial<StatusBarOptions>): Promise<void>;
