import path from "path";

module.exports = ({ env }) => {
  if (process.env.NODE_ENV === "production") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: env("PGHOST"),
          port: env.int("PGPORT"),
          database: env("PGDATABASE"),
          user: env("PGUSER"),
          password: env("PGPASSWORD"),
          ssl: env.bool(true),
        },
      },
    };
  } else {
    return {
      connection: {
        client: "sqlite",
        connection: {
          filename: path.join(
            __dirname,
            "..",
            "..",
            env("DATABASE_FILENAME", ".tmp/data.db")
          ),
        },
        useNullAsDefault: true,
      },
    };
  }
};
