var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'CordovaElectronV3DemoPlugin', 'coolMethod', [arg0]);
};

window.DemoPlugin = {
    coolMethod: exports.coolMethod
}
