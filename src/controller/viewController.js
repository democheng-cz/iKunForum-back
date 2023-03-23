class ViewController {
	// 根据分类id获取博客
	getViewBlog(ctx, next) {
		const { viewBlogList } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: viewBlogList,
			},
		}
	}

	// 获取热门文章
	getViewHotBlog(ctx, next) {
		const { hotBlogs } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: hotBlogs,
			},
		}
	}

	// 获取博客成员
	getViewUser(ctx, next) {
		const { users } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: users,
			},
		}
	}

	// 获取博客详情
	getViewBlogDetail(ctx, next) {
		const { blogDetail } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: blogDetail,
			},
		}
	}
}

module.exports = new ViewController()
