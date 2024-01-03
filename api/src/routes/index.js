const { Router } = require("express");
const usersRoutes = require("./users.routes");
const sessionsRouter = require("./sessions.rutes");
const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRouter);

module.exports = routes;