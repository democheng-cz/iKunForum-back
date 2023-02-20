const blogModel = require("../model/blog")
const categoryModel = require("../model/category")
class BlogMiddleware {
	async uploadBlog(ctx, next) {
		try {
			const baseUrl = "http://localhost:8888/"
			const { title, desc, content, status, category_id } = ctx.request.body
			console.log(category_id)
			const { nickname, user_id } = ctx.user
			const { cover } = ctx.request.files
			const filepath = baseUrl + cover.filepath.split("\\static\\")[1]
			const res = await blogModel.create({
				title,
				cover: filepath,
				desc,
				content,
				status,
				user_name: nickname,
				user_id,
				category_id,
			})
			await next()
		} catch (error) {
			// console.log(error)
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 获取blog列表
	async blogList(ctx, next) {
		try {
			const { user_id } = ctx.user
			const {
				title,
				status,
				category_id,
				pageSize: limit = 2,
				pageNum = 1,
			} = ctx.request.query

			const query = {}
			query.user_id = user_id
			if (title) query.title = title
			if (Number.parseInt(status) >= 0) query.status = Number.parseInt(status)
			if (category_id) query.category_id = category_id
			const blogs = await blogModel
				.find({ ...query })
				.skip((pageNum - 1) * limit)
				.limit(limit)
			ctx.blogs = blogs
			await next()
		} catch (error) {}
	}
}

module.exports = new BlogMiddleware()
