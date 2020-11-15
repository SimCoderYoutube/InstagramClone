"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unzip = void 0;

function _fsExtra() {
  const data = require("fs-extra");

  _fsExtra = function () {
    return data;
  };

  return data;
}

const StreamZip = require('node-stream-zip');

const unzip = async (source, destination) => {
  return new Promise((resolve, reject) => {
    const zip = new StreamZip({
      file: source,
      storeEntries: true
    });
    (0, _fsExtra().mkdirpSync)(destination);
    zip.on('ready', () => {
      zip.extract(null, destination, err => {
        zip.close();

        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  });
};

exports.unzip = unzip;

//# sourceMappingURL=unzip.js.map