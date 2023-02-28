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
		console.log("first")
		const { blogs, count } = ctx.blog
		console.log(blogs)
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: blogs,
				total: count,
			},
		}
	}

	// 获取博客分类列表
	getBlogCategoryList(ctx, next) {
		const { blogCategory } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: blogCategory,
			},
		}
	}

	// 上传封面
	uploadCover(ctx, next) {
		ctx.body = {
			status: 200,
			message: "上传成功",
			result: {
				filePath: ctx.cover,
			},
		}
	}
}

module.exports = new BlogController()
