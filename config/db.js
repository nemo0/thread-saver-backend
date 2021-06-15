require('dotenv').config({ path: './config/.env' });
const harperive = require('harperive');

const DB_CONFIG = {
  harperHost: process.env.HD_HOST,
  username: process.env.HD_USER,
  password: process.env.HD_PASS,
  schema: process.env.HD_SCHEMA, // optional
};

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;
