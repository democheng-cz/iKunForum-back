const Router = require("koa-router")

const authMiddleware = require("../middleware/authMiddleware")
const authController = require("../controller/authController")

const userMiddleware = require("../middleware/userMiddleware")
const UserController = require("../controller/userController")

const authRouter = new Router({ prefix: "" })

authRouter.post("/login", authMiddleware.verifyInfo, authController.login)
authRouter.post("/register", authMiddleware.verifyRegisterInfo)
authRouter.post(
	"/menulist",
	authMiddleware.verifyToken,
	userMiddleware.getMenuList,
	UserController.menuList
)

module.exports = authRouter
