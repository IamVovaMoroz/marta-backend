// const { parse } = require('pg-connection-string')

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env('DATABASE_URL'))
//   return {
//     connection: {
//       client: 'postgres',
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password
//       },
//       debug: false
//     }
//   }
// }

const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const { host, port, database, user, password, ssl } = parse(env('DATABASE_URL'));

  // Убедимся, что SSL включен
  const connectionSettings = {
    host,
    port,
    database,
    user,
    password,
    ssl: ssl ? { rejectUnauthorized: false } : false, // Установим rejectUnauthorized в false, чтобы разрешить самоподписанные сертификаты
  };

  return {
    connection: {
      client: 'postgres',
      connection: connectionSettings,
      debug: false,
    }
  };
};
