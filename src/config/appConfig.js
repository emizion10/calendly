const { env } = process;
require("dotenv").config({
  path: `${__dirname}/../../.env`,
});

const config = {
  dbConfig: {
    env: {
      host: env.DB_HOST,
      port: env.DB_PORT,
      dialect: "postgres",
    },
    credentials: {
      username: env.DB_USER_NAME,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    },
  },
};

module.exports = config;
