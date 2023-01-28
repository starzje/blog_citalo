export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("strapi-production-c7c6.up.railway.app", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
