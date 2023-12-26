const AppError = require("../util/AppError")
const sqliteConnect = require("../database/sqlite")
const { hash } = require("bcryptjs")
class UserController {
  async create(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnect()
    const checkUserExistsEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)", [email]
    )
    if (checkUserExistsEmail) {
      throw new AppError("Este e-mail já está em uso.")
    }
    const hashedPassword = await hash(password, 4)
    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]
    )

    response.status(201).json()
  }
}
module.exports = UserController;