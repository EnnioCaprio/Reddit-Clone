const fs = require('fs');
const path = require('path');
require('dotenv').config();

console.log(process.env);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
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
    connection: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false,
      ca: process.env.CA_CERT
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
