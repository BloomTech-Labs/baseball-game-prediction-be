if (process.env.NODE_ENV === "production") {
  console.log("production");
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
