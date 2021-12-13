const { hash } = require('bcryptjs');

const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async store(request, response) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      return response.status(400).json({ error: 'Name/email/password required' });
    }

    const emailExists = await UsersRepository.findByEmail(email);

    if (emailExists) {
      return response.status(400).json({ error: 'This email already exists' });
    }

    const hashedPassword = await hash(password, 8);

    const user = await UsersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    delete user.password;

    console.log(user);

    return response.json(user);
  }
}

module.exports = new UserController();
