const Router = require("koa-router")
const userController = require("../controller/userController")

const authMiddleware = require("../middleware/authMiddleware")

const userMiddleware = require("../middleware/userMiddleware")

const userRouter = new Router({ prefix: "/user" })

// 上传头像
userRouter.post(
	"/avatar",
	authMiddleware.verifyToken,
	userMiddleware.uploadAvatar
)

// 修改信息
userRouter.patch(
	"/update",
	authMiddleware.verifyToken,
	userMiddleware.updateUserInfo,
	userController.updateUserInfo
)

// 获取用户列表
userRouter.get(
	"/",
	authMiddleware.verifyToken,
	userMiddleware.getUserList,
	userController.getUserList
)

module.exports = userRouter
