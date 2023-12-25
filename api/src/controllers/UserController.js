const AppError = require("../util/AppError")
const sqliteConnect = require("../database/sqlite")
class UserController {
  async create(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnect()
    const checkUserExistsEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)", [email]
    )
    if (checkUserExistsEmail) {
      throw new AppError("Este Email já está em uso.")
    }
    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]
    )

    response.status(201).json()
  }
}
module.exports = UserController;