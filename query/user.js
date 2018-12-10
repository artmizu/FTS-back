const pool = require('./db');

module.exports = {
  async get() {
    try {
      let { rows } = await pool.query('SELECT * FROM user_list LIMIT 40');
      return rows;
    } catch (e) {
      console.error('Error on receiving user list', e);
    }
  },
  async search(query) {
    try {
      let { rows } = await pool.query(`
        SELECT 
          id,
          ts_headline(name, q) AS name, 
          ts_headline(college, q) AS college 
        FROM 
          (SELECT id, name, college, to_tsvector(name) || to_tsvector(college) AS document FROM user_list) AS temp,
          websearch_to_tsquery($1) as q 
        WHERE q @@ temp.document;
      `, [query])
      return rows;
    } catch (e) {
      console.error('Error on user list search query', e);
    }
  }
}