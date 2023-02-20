const Router = require("koa-router")
const userController = require("../controller/userController")

const authMiddleware = require("../middleware/authMiddleware")

const userMiddleware = require("../middleware/userMiddleware")

const userRouter = new Router({ prefix: "/user" })

userRouter.get("/", () => {
	console.log("first")
})

// 上传头像
userRouter.post(
	"/file/avatar",
	authMiddleware.verifyToken,
	userMiddleware.uploadAvatar
)

// 修改信息
userRouter.patch(
	"/userinfo",
	authMiddleware.verifyToken,
	userMiddleware.updateUserInfo,
	userController.updateUserInfo
)

module.exports = userRouter
