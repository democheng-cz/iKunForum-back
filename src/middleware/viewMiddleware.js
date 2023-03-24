const blogModel = require("../model/blog")
const userModel = require("../model/user")

class ViewMiddleware {
	// 获取博客列表
	async getViewBlog(ctx, next) {
		const { pageSize, category_id, count } = ctx.request.query
		console.log(ctx.request.query)
		const query = category_id ? { category_id } : {}
		console.log(pageSize)
		try {
			const res = await blogModel.find(query).skip(count).limit(pageSize)
			ctx.viewBlogList = res
			const total = await blogModel.countDocuments(query)
			ctx.total = total
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}
	// 获取热门博客
	async getViewHotBlog(ctx, next) {
		try {
			// const res = await blogModel.find({ isHot: true })
			const res = await blogModel.find()

			ctx.hotBlogs = res
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 获取博客成员
	async getViewUser(ctx, next) {
		const { pageSize } = ctx.request.query
		try {
			const res = await userModel
				.find({}, { password: 0, hashPassword: 0 })
				.limit(pageSize)
			ctx.users = res
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 获取博客详情
	async getViewBlogDetail(ctx, next) {
		const { blog_id } = ctx.request.query
		const blog = await blogModel.find({ blog_id })
		ctx.blog = blog
		await next()
	}
}

module.exports = new ViewMiddleware()