"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _cliTools() {
  const data = require("@react-native-community/cli-tools");

  _cliTools = function () {
    return data;
  };

  return data;
}

var _versionRanges = _interopRequireDefault(require("../versionRanges"));

var _checkInstallation = require("../checkInstallation");

var _common = require("./common");

var _environmentVariables = require("../../../tools/windows/environmentVariables");

function _path() {
  const data = require("path");

  _path = function () {
    return data;
  };

  return data;
}

var _executeWinCommand = require("../../../tools/windows/executeWinCommand");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  label: 'Python',
  getDiagnostics: async ({
    Languages
  }) => ({
    needsToBeFixed: (0, _checkInstallation.doesSoftwareNeedToBeFixed)({
      version: typeof Languages.Python === 'string' ? Languages.Python : Languages.Python.version,
      versionRange: _versionRanges.default.PYTHON
    }),
    version: typeof Languages.Python === 'string' ? Languages.Python : Languages.Python.version,
    versionRange: _versionRanges.default.PYTHON
  }),
  win32AutomaticFix: async ({
    loader
  }) => {
    try {
      const arch = process.arch === 'x64' ? 'amd64.' : '';
      const installerUrl = `https://www.python.org/ftp/python/2.7.9/python-2.7.9.${arch}msi`;
      const installPath = (0, _path().join)(process.env.LOCALAPPDATA || '', 'python2');
      loader.start(`Downloading Python installer from "${installerUrl}"`);
      const installer = await (0, _cliTools().fetchToTemp)(installerUrl);
      loader.text = `Installing Python in "${installPath}"`;
      const command = `msiexec.exe /i "${installer}" TARGETDIR="${installPath}" /qn /L*P "python-log.txt"`;
      await (0, _executeWinCommand.executeCommand)(command);
      loader.text = 'Updating environment variables';
      await (0, _environmentVariables.updateEnvironment)('PATH', installPath);
      await (0, _environmentVariables.updateEnvironment)('PATH', (0, _path().join)(installPath, 'scripts'));
      loader.succeed('Python installed successfully');
    } catch (e) {
      loader.fail(e);
    }
  },
  runAutomaticFix: async () => {
    /**
     * Python is only needed on Windows so this method should never be called.
     * Leaving it in case that changes and as an example of how to have a
     * fallback.
     */
    (0, _common.logManualInstallation)({
      healthcheck: 'Python',
      url: 'https://www.python.org/downloads/'
    });
  }
};
exports.default = _default;

//# sourceMappingURL=python.js.map