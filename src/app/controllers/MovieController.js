const MoviesRepository = require('../repositories/MoviesRepository');

class MovieController {
  async index(request, response) {
    const user_id = request.user.id;

    const movies = await MoviesRepository.findAllByUserId(user_id);

    return response.json(movies);
  }
  
  async store(request, response) {
    const { id, title, description, image_url } = request.body;
    const user_id = request.user.id;

    if (!id || !title || !description || !image_url) {
      return response.status(400).json({ error: 'id/title/description/image required' });
    }

    const movieExists = await MoviesRepository.findByUserId({
      id,
      user_id,
    });

    if (movieExists) {
      return response.status(400).json({error: 'Movie already saved'});
    }

    const movie = await MoviesRepository.create({
      id,
      title,
      description,
      image_url,
      user_id,
    });

    return response.json(movie);
  }

  async show(request, response) {
    const { id } = request.params;
    const user_id = request.user.id;

    const movie = await MoviesRepository.findByUserId({
      id,
      user_id,
    });

    return response.json(movie);
  }

  async delete(request, response) {
    const { id } = request.params;

    await MoviesRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new MovieController();
