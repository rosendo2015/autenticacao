const AppError = require("../util/AppError")
const sqliteConnect = require("../database/sqlite")
const { hash, compare } = require("bcryptjs")
class UserController {
  async list(request, response) {
    const { name, email, password } = request.body
    const database = await sqliteConnect()
    const listUsers = await database.get("SELECT * FROM users")
    return response.status(200).json({ listUsers });
  }
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

    return response.status(201).json()
  }
  async update(request, response) {
    const { name, email, avatar, password, old_password } = request.body;
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
    user.avatar = avatar ?? user.avatar

    if (password && !old_password) {
      throw new AppError("Necessário informar a senha antiga")
    }
    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password)
      if (!checkOldPassword) {
        throw new AppError("Senha antiga é inválida.")
      }
      user.password = await hash(password, 4)
    }

    await database.run(`
    UPDATE users SET
    name = ?,
    email = ?,
    avatar = ?,
    password = ?,
    updated_at = DATETIME('now')
    WHERE id = ?`,
      [user.name, user.email, user.avatar, user.password, id]);

    return response.status(200).json();
  }
}
module.exports = UserController;