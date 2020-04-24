//We use it here to dynamically import the appropriate file at build time.
//CommonJs was popularized by Node. It has different syntax fro importing and exporting.

if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
