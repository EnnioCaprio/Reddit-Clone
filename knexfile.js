const fs = require('fs');
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'Application',
      port: 5432,
      user: 'postgres',
      password: 'password'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },

  },
  testing: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'Application',
      port: 5432,
      user: 'postgres',
      password: 'password'
    },
    migrations: {
      directory: './data/migrations',
      schemaName: "public",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DB_PROD,
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync('./nginx/configs/certs/ca-certificate.crt').toString()
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
