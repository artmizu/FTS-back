const pool = require('./db');

module.exports = {
  async get() {
    try {
      let { rows } = await pool.query('SELECT * FROM game_list LIMIT 40');
      return rows;
    } catch (e) {
      console.error('Error on receiving game list', e);
    }
  },
  async search(query) {
    try {
      let { rows } = await pool.query(`
        SELECT 
          id,
          ts_headline('russian', title, q) AS title, 
          ts_headline('russian', about, q) AS about,
          ts_headline('russian', genre, q) AS genre 
        FROM 
          (SELECT id, title, about, genre, to_tsvector('russian', title) || to_tsvector('russian', about) || to_tsvector('russian', genre) AS document FROM game_list) AS temp,
          websearch_to_tsquery('russian', $1) as q 
        WHERE q @@ temp.document;
      `, [query])
      return rows;
    } catch (e) {
      console.error('Error on game list search query', e);
    }
  }
}