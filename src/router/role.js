const Router = require("koa-router")

const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
const roleController = require("../controller/roleController")
const roleRouter = new Router({ prefix: "/role" })

// 添加role
roleRouter.post(
	"/",
	authMiddleware.verifyToken,
	roleMiddleware.addRole,
	roleController.addRole
)

// 根据角色获取路由权限
roleRouter.get(
	"/menulist/:role_id",
	authMiddleware.verifyToken,
	roleMiddleware.getMenuList,
	roleController.getMenuList
)

// 获取所有的角色
roleRouter.get(
	"/",
	authMiddleware.verifyToken,
	roleMiddleware.getRoles,
	roleController.getRoles
)

module.exports = roleRouter
