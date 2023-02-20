const Router = require("koa-router")

const { verifyToken } = require("../middleware/authMiddleware")
const blogMiddleware = require("../middleware/blogMiddleware")
const blogController = require("../controller/blogController")

const blogRouter = new Router({ prefix: "/blog" })

// 获取blog列表
blogRouter.get(
	"/",
	verifyToken,
	blogMiddleware.blogList,
	blogController.getBlogList
)

// 新建blog
blogRouter.post(
	"/",
	verifyToken,
	blogMiddleware.uploadBlog,
	blogController.uploadBlog
)

module.exports = blogRouter
