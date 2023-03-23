const Router = require("koa-router")

const viewMiddleware = require("../middleware/viewMiddleware")
const viewController = require("../controller/viewController")

// 前台接口
const viewRouter = new Router({ prefix: "/view" })

// 获取blog
viewRouter.get("/blog", viewMiddleware.getViewBlog, viewController.getViewBlog)

// 获取热门blog
viewRouter.get(
	"/hotblog",
	viewMiddleware.getViewHotBlog,
	viewController.getViewHotBlog
)

// 获取所有的blog用户
viewRouter.get("/user", viewMiddleware.getViewUser, viewController.getViewUser)

// 获取blog详情
viewRouter.get(
	"/blog/detail/:blog_id",
	viewMiddleware.getViewBlogDetail,
	viewController.getViewUser
)

module.exports = viewRouter
