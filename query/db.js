const db_data = require('./../db.json');
const { Pool } = require('pg');
const pool = new Pool(db_data);

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;