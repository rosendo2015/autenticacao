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
  async update(request, response) {
    const { name, email } = request.body;
    const { id } = request.params;

    const database = await sqliteConnect()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])
    if (!user) {
      throw new AppError("Usuário não encontrado.")
    }
    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])
    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.")
    }
    user.name = name ?? user.name
    user.email = email ?? user.email

    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`, [user.name, user.email, id]);

    return response.status(200).json();
  }
}
module.exports = UserController;