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
				pageSize: limit = 10,
				pageNum = 1,
			} = ctx.request.query
			const query = {}
			query.user_id = user_id
			if (title) query.title = title
			if (Number.parseInt(status) >= 0) query.status = Number.parseInt(status)
			if (category_id) query.category_id = category_id
			// console.log(query)
			const blogs = await blogModel
				.find({ ...query })
				.skip((pageNum - 1) * limit)
				.limit(limit)
			const count = await blogModel.count({ ...query })
			ctx.blog = { blogs, count }
			await next()
		} catch (error) {}
	}

	// 上传blog
	async uploadBlog(ctx, next) {
		const { category_id, title, desc, content, status, cover } =
			ctx.request.body
		const { user } = ctx
		try {
			await blogModel.create({ ...ctx.request.body, user_id: user.user_id })
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 上传封面
	async uploadCover(ctx, next) {
		const baseUrl = "http://localhost:8888/"
		const filepath =
			baseUrl + ctx.request.files.cover.filepath.split("\\static\\")[1]
		ctx.cover = filepath
		await next()
	}

	// 获取blog分类
	async getBlogCategoryList(ctx, next) {
		try {
			const categoryList = await categoryModel.find({})
			// console.log(categoryList)
			ctx.blogCategory = categoryList
			await next()
		} catch (error) {
			throw ctx.app.emit("error", new Error(error), ctx)
		}
	}
}

module.exports = new BlogMiddleware()
