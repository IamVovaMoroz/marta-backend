const { parse } = require('pg-connection-string')

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env('DATABASE_URL'))
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password
      },
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // Set to true in production
      },
      debug: false
    }
  }
}

// const { parse } = require('pg-connection-string');

// module.exports = ({ env }) => {
//   const { host, port, database, user, password, ssl } = parse(env('DATABASE_URL'));

//   // Убедимся, что SSL включен
//   const connectionSettings = {
//     host,
//     port,
//     database,
//     user,
//     password,
//     ssl: ssl ? { rejectUnauthorized: false } : false, // Установим rejectUnauthorized в false, чтобы разрешить самоподписанные сертификаты
//   };

//   return {
//     connection: {
//       client: 'postgres',
//       connection: connectionSettings,
//       debug: false,
//     }
//   };
// };



// const { parse } = require('pg-connection-string')

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'strapi'),
//       user: env('DATABASE_USERNAME', 'strapi'),
//       password: env('DATABASE_PASSWORD', 'strapi'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: {
//         rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });