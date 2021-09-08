module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: `http://${env('HOST', '0.0.0.0')}:${env.int('PORT', 1337)}/api`,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '88b07f2e54174bb5b372295960c3683d'),
    },
  },
});
