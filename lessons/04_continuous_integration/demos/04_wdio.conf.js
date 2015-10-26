var nconf = require("nconf").env().file({ file: "test/functional/browserstack.json" }));

module.exports = {
  user: nconf.get("user"),
  key: nconf.get("key")

  // more settings here
};