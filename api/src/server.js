require("express-async-errors")

const AppError = require("./util/AppError")
const express = require("express")
const routes = require("./routes")
const migrationsRun = require("./database/sqlite/migrations")
const app = express();
migrationsRun()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  console.log(error)

  return response.status(500).json({
    status: "error",
    message: "..::INTERNAL SERVER ERROR::.."
  })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server port: ${PORT}`))