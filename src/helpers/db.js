const entities = require("../entities");
module.exports.initializeConnection = async () => {
  await Promise.all(
    entities.map((entity) => {
      return entity.sync();
    })
  );
};
