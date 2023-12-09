// const { parse } = require('pg-connection-string')

// module.exports = ({ env }) => {
//   const { host, port, database, user, password, ssl } = parse(env('DATABASE_URL'))
//   return {
//     connection: {
//       client: 'postgres',
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//         ssl: false,
//       },

//       debug: false
//     }
//   }
// }

// ----------------------------------------

// const { parse } = require('pg-connection-string')

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      ssl: { rejectUnauthorized: env('DATABASE_SSL', false) === 'true' },

      // эти значения можно взять из ссылки const { database, user, password } = parse(env('DATABASE_URL'))
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),

      
    },
    debug: false
  }
})

// const { parse } = require('pg-connection-string')
// module.exports = ({ env }) => {
//   const { host, port, database, user, password, ssl } = parse(
//     env('DATABASE_URL')
//   )
//   return {
//     connection: {
//       client: 'postgres',
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password,
//         // ssl: env.bool('DATABASE_SSL', false)
//         ssl: env('DATABASE_SSL', false)
//       },

//       debug: false
//     }
//   }
// }

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

// # Database
// DATABASE_CLIENT=mysql
// DATABASE_HOST=127.0.0.1
// DATABASE_PORT=3306
// DATABASE_NAME=strapi
// DATABASE_USERNAME=strapi
// DATABASE_PASSWORD=strap1
// DATABASE_SSL=false
