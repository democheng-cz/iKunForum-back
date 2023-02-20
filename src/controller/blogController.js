class BlogController {
	//上传blog
	uploadBlog(ctx, next) {
		ctx.body = {
			status: 200,
			message: "上传成功",
			result: {},
		}
	}

	// 获取博客列表
	getBlogList(ctx, next) {
		const { blogs } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: blogs,
				total: blogs.length,
			},
		}
	}
}

module.exports = new BlogController()
