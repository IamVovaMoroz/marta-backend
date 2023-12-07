// module.exports = ({ env }) => ({
//   auth: {
//     secret: env('ADMIN_JWT_SECRET')
//   },
//   // url: "/dashboard",
//   apiToken: {
//     salt: env('API_TOKEN_SALT')
//   },
//   transfer: {
//     token: {
//       salt: env('TRANSFER_TOKEN_SALT')
//     }
//   },
//   flags: {
//     nps: env.bool('FLAG_NPS', true),
//     promoteEE: env.bool('FLAG_PROMOTE_EE', true)
//   }
// })
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3005f8e3851145c9e8e012f6e63bfdf2'),
  },
  url: "/dashboard",
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  // Disable SSL for local development
  ssl: false,
});