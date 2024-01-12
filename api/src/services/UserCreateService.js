const { hash } = require("bcryptjs")
const AppError = require("../util/AppError")

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async execute({ name, email, password }) {
    const checkUserExistsEmail = await this.userRepository.findByEmail(email)

    
    if (checkUserExistsEmail) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 4)

    const userCreated = await this.userRepository.create({ name, email, password: hashedPassword })

    return userCreated;
  }
}
module.exports = UserCreateService