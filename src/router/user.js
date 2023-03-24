const Router = require("koa-router")
const userController = require("../controller/userController")

const authMiddleware = require("../middleware/authMiddleware")

const userMiddleware = require("../middleware/userMiddleware")

const userRouter = new Router({ prefix: "/user" })

// 上传头像
userRouter.post(
	"/image",
	authMiddleware.verifyToken,
	userMiddleware.uploadAvatar
)

// 修改用户信息
userRouter.patch(
	"/update",
	authMiddleware.verifyToken,
	userMiddleware.updateUserInfo,
	userController.updateUserInfo
)

// 修改信息
userRouter.patch(
	"/update/state",
	authMiddleware.verifyToken,
	userMiddleware.updateUserState,
	userController.updateUserState
)

// 获取用户列表
userRouter.get(
	"/",
	authMiddleware.verifyToken,
	userMiddleware.getUserList,
	userController.getUserList
)

module.exports = userRouter
