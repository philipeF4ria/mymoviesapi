const db = require('../../database');

class MoviesRepository {
  async create({
    id,
    title,
    description,
    image_url,
    user_id
  }) {
    const [ row ] = await db.query(`
      INSERT INTO movies(id, title, description, image_url, user_id) 
      VALUES($1, $2, $3, $4, $5)
      RETURNING *
    `, [id, title, description, image_url, user_id]);
  
    return row;
  }

  async findAllByUserId(user_id) {
    const rows = await db.query('SELECT * FROM movies WHERE user_id = $1', [user_id]);

    return rows;
  }

  async findById(id) {
    const [ row ] = await db.query('SELECT * FROM movies WHERE id = $1', [id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`DELETE FROM movies WHERE id = $1`, [id]);

    return deleteOp;
  }
}

module.exports = new MoviesRepository();
