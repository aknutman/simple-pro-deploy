module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db98256848228b21888685a0273a2cb2'),
  },
});
