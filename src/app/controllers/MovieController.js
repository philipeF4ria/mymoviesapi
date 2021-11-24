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
    
    const movie = await MoviesRepository.findById(id);

    if (!movie) {
      return response.status(404).json({ error: 'Movie not found' });
    }

    return response.json(movie);
  }
}

module.exports = new MovieController();
