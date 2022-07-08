module.exports = {
  coolMethod: async function (args) {
    return new Promise((resolve, reject) => {
      args = args[0];
      if (typeof args == 'object' && args != undefined && args != null) {
        if (args[0] != undefined && args[0] != null) {
          var message = String(args[0]);
          if (message.length > 0) {
            resolve(message);
            return;
          }
        }
      }
      reject("Expected one non-empty string argument.");
    });
  }
};
