const db_data = require('./../db.json');
const { Pool } = require('pg');
const pool = new Pool(db_data);

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  async get() {
    try {
      let { rows } = await pool.query('SELECT * FROM user_list');
      return rows;
    } catch (e) {
      console.error('Error on receiving user list', e);
    }
  },
  async ftSearch(query) {
    try {
      let { rows } = await pool.query(`
      
      `)
    } catch (e) {
      console.error('Error on user list search query');
    }
  }
}