const roleModel = require("../model/role")

const userModel = require("../model/user")

class UserMiddleware {
	// 根据角色获取菜单
	async getMenuList(ctx, next) {
		const { role } = ctx.user
		try {
			const result = await roleModel.findOne({ role })
			ctx.role = result
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 上传头像
	async uploadAvatar(ctx, next) {
		const baseUrl = "http://localhost:8888/"
		ctx.set(
			"Access-Control-Allow-Headers",
			"Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
		)
		ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")

		// console.log(ctx.request.files.file.originalFilename)
		const filepath =
			baseUrl + ctx.request.files.file.filepath.split("\\static\\")[1]

		try {
			await userModel
				.findOne({ account: ctx.user.account })
				.updateOne({ avatar: filepath })
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}

		ctx.body = {
			code: 200,
			message: "上传成功",
			result: {
				filename: ctx.request.files.file.originalFilename,
				filepath: filepath,
			},
		}
	}

	// 修改用户信息
	async updateUserInfo(ctx, next) {
		const baseUrl = "http://localhost:8888/"
		const user = ctx.request.body
		const filepath =
			baseUrl + ctx.request.files.avatar.filepath.split("\\static\\")[1]
		user.avatar = filepath
		try {
			// const res = await userModel
			// 	.findOne({ account: ctx.user.account })
			// 	.updateOne(user)
			// 	.findOne({ account: ctx.user.account })
			// const res = await userModel.updateOne(
			// 	{ account: ctx.user.account },
			// 	{ ...user }
			// )
			const res = await userModel.findOneAndUpdate(
				{ account: ctx.user.account },
				{ ...user }
			)
			// console.log(res)
			ctx.user = res
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}
}

module.exports = new UserMiddleware()
