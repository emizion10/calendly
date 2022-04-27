const app = require("./config/express");
const { initializeConnection } = require("./helpers/db");

initializeConnection()
  .then(() => {
    // listen to requests
    app.listen(3000, () => console.info(`server started on port 3000`));
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Exports express
 * @public
 */

module.exports = app;
