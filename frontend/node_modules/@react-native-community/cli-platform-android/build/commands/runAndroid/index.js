"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _execa() {
  const data = _interopRequireDefault(require("execa"));

  _execa = function () {
    return data;
  };

  return data;
}

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

var _adb = _interopRequireDefault(require("./adb"));

var _runOnAllDevices = _interopRequireDefault(require("./runOnAllDevices"));

var _tryRunAdbReverse = _interopRequireDefault(require("./tryRunAdbReverse"));

var _tryLaunchAppOnDevice = _interopRequireDefault(require("./tryLaunchAppOnDevice"));

var _getAdbPath = _interopRequireDefault(require("./getAdbPath"));

function _cliTools() {
  const data = require("@react-native-community/cli-tools");

  _cliTools = function () {
    return data;
  };

  return data;
}

var _warnAboutManuallyLinkedLibs = _interopRequireDefault(require("../../link/warnAboutManuallyLinkedLibs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// Validates that the package name is correct
function validatePackageName(packageName) {
  return /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/.test(packageName);
}

function displayWarnings(config, args) {
  (0, _warnAboutManuallyLinkedLibs.default)(config);

  if (args.appFolder) {
    _cliTools().logger.warn('Using deprecated "--appFolder" flag. Use "project.android.appName" in react-native.config.js instead.');
  }

  if (args.root) {
    _cliTools().logger.warn('Using deprecated "--root" flag. App root is discovered automatically. Alternatively, set "project.android.sourceDir" in react-native.config.js.');
  }
}

/**
 * Starts the app on a connected Android emulator or device.
 */
async function runAndroid(_argv, config, args) {
  displayWarnings(config, args);
  const androidProject = config.project.android;

  if (!androidProject) {
    throw new (_cliTools().CLIError)(`
  Android project not found. Are you sure this is a React Native project?
  If your Android files are located in a non-standard location (e.g. not inside \'android\' folder), consider setting
  \`project.android.sourceDir\` option to point to a new location.
`);
  }

  if (args.jetifier) {
    _cliTools().logger.info(`Running ${_chalk().default.bold('jetifier')} to migrate libraries to AndroidX. ${_chalk().default.dim('You can disable it using "--no-jetifier" flag.')}`);

    try {
      await (0, _execa().default)(require.resolve('jetifier/bin/jetify'), {
        stdio: 'inherit'
      });
    } catch (error) {
      throw new (_cliTools().CLIError)('Failed to run jetifier.', error);
    }
  }

  if (!args.packager) {
    return buildAndRun(args, androidProject);
  }

  return (0, _cliTools().isPackagerRunning)(args.port).then(result => {
    if (result === 'running') {
      _cliTools().logger.info('JS server already running.');
    } else if (result === 'unrecognized') {
      _cliTools().logger.warn('JS server not recognized, continuing with build...');
    } else {
      // result == 'not_running'
      _cliTools().logger.info('Starting JS server...');

      try {
        startServerInNewWindow(args.port, args.terminal, config.reactNativePath);
      } catch (error) {
        _cliTools().logger.warn(`Failed to automatically start the packager server. Please run "react-native start" manually. Error details: ${error.message}`);
      }
    }

    return buildAndRun(args, androidProject);
  });
} // Builds the app and runs it on a connected emulator / device.


function buildAndRun(args, androidProject) {
  process.chdir(androidProject.sourceDir);
  const cmd = process.platform.startsWith('win') ? 'gradlew.bat' : './gradlew'; // "app" is usually the default value for Android apps with only 1 app

  const {
    appName,
    manifestPath
  } = androidProject;
  const {
    appFolder
  } = args;

  const androidManifest = _fs().default.readFileSync(manifestPath, 'utf8');

  let packageNameMatchArray = androidManifest.match(/package="(.+?)"/);

  if (!packageNameMatchArray || packageNameMatchArray.length === 0) {
    throw new (_cliTools().CLIError)(`Failed to build the app: No package name found. Found errors in ${_chalk().default.underline.dim(`${appFolder || appName}/src/main/AndroidManifest.xml`)}`);
  }

  let packageName = packageNameMatchArray[1];

  if (!validatePackageName(packageName)) {
    _cliTools().logger.warn(`Invalid application's package name "${_chalk().default.bgRed(packageName)}" in 'AndroidManifest.xml'. Read guidelines for setting the package name here: ${_chalk().default.underline.dim('https://developer.android.com/studio/build/application-id')}`); // we can also directly add the package naming rules here

  }

  const adbPath = (0, _getAdbPath.default)();

  if (args.deviceId) {
    return runOnSpecificDevice(args, cmd, packageName, adbPath, androidProject);
  } else {
    return (0, _runOnAllDevices.default)(args, cmd, packageName, adbPath, androidProject);
  }
}

function runOnSpecificDevice(args, gradlew, packageName, adbPath, androidProject) {
  const devices = _adb.default.getDevices(adbPath);

  const {
    deviceId
  } = args;

  if (devices.length > 0 && deviceId) {
    if (devices.indexOf(deviceId) !== -1) {
      buildApk(gradlew, androidProject.sourceDir);
      installAndLaunchOnDevice(args, deviceId, packageName, adbPath, androidProject);
    } else {
      _cliTools().logger.error(`Could not find device with the id: "${deviceId}". Please choose one of the following:`, ...devices);
    }
  } else {
    _cliTools().logger.error('No Android device or emulator connected.');
  }
}

function buildApk(gradlew, sourceDir) {
  try {
    // using '-x lint' in order to ignore linting errors while building the apk
    const gradleArgs = ['build', '-x', 'lint'];

    _cliTools().logger.info('Building the app...');

    _cliTools().logger.debug(`Running command "${gradlew} ${gradleArgs.join(' ')}"`);

    _execa().default.sync(gradlew, gradleArgs, {
      stdio: 'inherit',
      cwd: sourceDir
    });
  } catch (error) {
    throw new (_cliTools().CLIError)('Failed to build the app.', error);
  }
}

function tryInstallAppOnDevice(args, adbPath, device, androidProject) {
  try {
    // "app" is usually the default value for Android apps with only 1 app
    const {
      appName,
      sourceDir
    } = androidProject;
    const {
      appFolder
    } = args;
    const variant = args.variant.toLowerCase();
    const buildDirectory = `${sourceDir}/${appName}/build/outputs/apk/${variant}`;
    const apkFile = getInstallApkName(appFolder || appName, // TODO: remove appFolder
    adbPath, variant, device, buildDirectory);
    const pathToApk = `${buildDirectory}/${apkFile}`;
    const adbArgs = ['-s', device, 'install', '-r', '-d', pathToApk];

    _cliTools().logger.info(`Installing the app on the device "${device}"...`);

    _cliTools().logger.debug(`Running command "cd android && adb -s ${device} install -r -d ${pathToApk}"`);

    _execa().default.sync(adbPath, adbArgs, {
      stdio: 'inherit'
    });
  } catch (error) {
    throw new (_cliTools().CLIError)('Failed to install the app on the device.', error);
  }
}

function getInstallApkName(appName, adbPath, variant, device, buildDirectory) {
  const availableCPUs = _adb.default.getAvailableCPUs(adbPath, device); // check if there is an apk file like app-armeabi-v7a-debug.apk


  for (const availableCPU of availableCPUs.concat('universal')) {
    const apkName = `${appName}-${availableCPU}-${variant}.apk`;

    if (_fs().default.existsSync(`${buildDirectory}/${apkName}`)) {
      return apkName;
    }
  } // check if there is a default file like app-debug.apk


  const apkName = `${appName}-${variant}.apk`;

  if (_fs().default.existsSync(`${buildDirectory}/${apkName}`)) {
    return apkName;
  }

  throw new (_cliTools().CLIError)('Could not find the correct install APK file.');
}

function installAndLaunchOnDevice(args, selectedDevice, packageName, adbPath, androidProject) {
  (0, _tryRunAdbReverse.default)(args.port, selectedDevice);
  tryInstallAppOnDevice(args, adbPath, selectedDevice, androidProject);
  (0, _tryLaunchAppOnDevice.default)(selectedDevice, packageName, adbPath, args);
}

function startServerInNewWindow(port, terminal, reactNativePath) {
  /**
   * Set up OS-specific filenames and commands
   */
  const isWindows = /^win/.test(process.platform);
  const scriptFile = isWindows ? 'launchPackager.bat' : 'launchPackager.command';
  const packagerEnvFilename = isWindows ? '.packager.bat' : '.packager.env';
  const portExportContent = isWindows ? `set RCT_METRO_PORT=${port}` : `export RCT_METRO_PORT=${port}`;
  /**
   * Set up the `.packager.(env|bat)` file to ensure the packager starts on the right port.
   */

  const launchPackagerScript = _path().default.join(reactNativePath, `scripts/${scriptFile}`);
  /**
   * Set up the `launchpackager.(command|bat)` file.
   * It lives next to `.packager.(bat|env)`
   */


  const scriptsDir = _path().default.dirname(launchPackagerScript);

  const packagerEnvFile = _path().default.join(scriptsDir, packagerEnvFilename);

  const procConfig = {
    cwd: scriptsDir
  };
  /**
   * Ensure we overwrite file by passing the `w` flag
   */

  _fs().default.writeFileSync(packagerEnvFile, portExportContent, {
    encoding: 'utf8',
    flag: 'w'
  });

  if (process.platform === 'darwin') {
    try {
      return _execa().default.sync('open', ['-a', terminal, launchPackagerScript], procConfig);
    } catch (error) {
      return _execa().default.sync('open', [launchPackagerScript], procConfig);
    }
  }

  if (process.platform === 'linux') {
    try {
      return _execa().default.sync(terminal, ['-e', `sh ${launchPackagerScript}`], { ...procConfig,
        detached: true
      });
    } catch (error) {
      // By default, the child shell process will be attached to the parent
      return _execa().default.sync('sh', [launchPackagerScript], procConfig);
    }
  }

  if (/^win/.test(process.platform)) {
    // Awaiting this causes the CLI to hang indefinitely, so this must execute without await.
    return (0, _execa().default)('cmd.exe', ['/C', launchPackagerScript], { ...procConfig,
      detached: true,
      stdio: 'ignore'
    });
  }

  _cliTools().logger.error(`Cannot start the packager. Unknown platform ${process.platform}`);

  return;
}

var _default = {
  name: 'run-android',
  description: 'builds your app and starts it on a connected Android emulator or device',
  func: runAndroid,
  options: [{
    name: '--root [string]',
    description: '[DEPRECATED - root is discovered automatically] Override the root directory for the android build (which contains the android directory)',
    default: ''
  }, {
    name: '--variant [string]',
    description: "Specify your app's build variant",
    default: 'debug'
  }, {
    name: '--appFolder [string]',
    description: '[DEPRECATED – use "project.android.appName" in react-native.config.js] Specify a different application folder name for the android source. If not, we assume is "app"'
  }, {
    name: '--appId [string]',
    description: 'Specify an applicationId to launch after build. If not specified, `package` from AndroidManifest.xml will be used.',
    default: ''
  }, {
    name: '--appIdSuffix [string]',
    description: 'Specify an applicationIdSuffix to launch after build.',
    default: ''
  }, {
    name: '--main-activity [string]',
    description: 'Name of the activity to start',
    default: 'MainActivity'
  }, {
    name: '--deviceId [string]',
    description: 'builds your app and starts it on a specific device/simulator with the ' + 'given device id (listed by running "adb devices" on the command line).'
  }, {
    name: '--no-packager',
    description: 'Do not launch packager while building'
  }, {
    name: '--port [number]',
    default: process.env.RCT_METRO_PORT || 8081,
    parse: val => Number(val)
  }, {
    name: '--terminal [string]',
    description: 'Launches the Metro Bundler in a new window using the specified terminal path.',
    default: (0, _cliTools().getDefaultUserTerminal)()
  }, {
    name: '--tasks [list]',
    description: 'Run custom Gradle tasks. By default it\'s "installDebug"',
    parse: val => val.split(',')
  }, {
    name: '--no-jetifier',
    description: 'Do not run "jetifier" – the AndroidX transition tool. By default it runs before Gradle to ease working with libraries that don\'t support AndroidX yet. See more at: https://www.npmjs.com/package/jetifier.',
    default: false
  }]
};
exports.default = _default;

//# sourceMappingURL=index.js.map