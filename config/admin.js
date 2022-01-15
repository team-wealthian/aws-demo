module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e74cf2393a8726e400f750536b3cab5f'),
  },
});
