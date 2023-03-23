const Router = require("koa-router")

const authMiddleware = require("../middleware/authMiddleware")
const authController = require("../controller/authController")

const authRouter = new Router({ prefix: "" })

authRouter.post("/login", authMiddleware.verifyInfo, authController.login)
authRouter.post(
	"/register",
	authMiddleware.verifyRegisterInfo,
	authController.register
)

module.exports = authRouter
