const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');

const authConfig = require('../../config/auth');

const UsersRepository = require('../repositories/UsersRepository');

class UserAuthenticationController {
  async store(request, response) {
    const { email, password } = request.body;

    const user = await UsersRepository.findByEmail(email);

    if (!user) {
      return response.status(400).json({ error: 'Incorrect email/password combination' });
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      return response.status(400).json({ error: 'Incorrect email/password combination' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    delete user.password;

    console.log({ user, token });

    return response.json({ user, token });
  }
}

module.exports = new UserAuthenticationController();
