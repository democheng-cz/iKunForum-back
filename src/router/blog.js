const Router = require("koa-router")

const { verifyToken } = require("../middleware/authMiddleware")
const blogMiddleware = require("../middleware/blogMiddleware")
const blogController = require("../controller/blogController")
const authMiddleware = require("../middleware/authMiddleware")

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

// 获取blog分类
blogRouter.get(
	"/category",
	verifyToken,
	blogMiddleware.getBlogCategoryList,
	blogController.getBlogCategoryList
)

// 上传封面
blogRouter.post(
	"/image",
	verifyToken,
	blogMiddleware.uploadCover,
	blogController.uploadCover
)

// 获取博客详情
blogRouter.get(
	"/:id",
	verifyToken,
	blogMiddleware.getBlogDetail,
	blogController.getBlogDetail
)

// 根据博客id删除博客
blogRouter.delete(
	"/:blog_id",
	verifyToken,
	blogMiddleware.deleteBlog,
	blogController.deleteBlog
)

// 根据id修改update
blogRouter.patch(
	"/update",
	verifyToken,
	blogMiddleware.updateBlog,
	blogController.updateBlog
)

module.exports = blogRouter
