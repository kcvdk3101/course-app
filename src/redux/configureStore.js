// Use commonJS so we can dynamically import during build-time
if (process.env.NODE_ENV === "production") {
  module.exports = require("./configureStore.production")
} else {
  module.exports = require("./configureStore.dev")
}