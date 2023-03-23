const roleModel = require("../model/role")

const userModel = require("../model/user")

class UserMiddleware {
	// 上传头像
	async uploadAvatar(ctx, next) {
		const baseUrl = "http://localhost:8888/"
		ctx.set(
			"Access-Control-Allow-Headers",
			"Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
		)
		ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")

		const filepath =
			baseUrl + ctx.request.files.avatar.filepath.split("\\static\\")[1]

		// ctx.avatar = filepath
		// try {
		// 	await userModel.updateOne(
		// 		{ account: ctx.user.account },
		// 		{ avatar: filepath }
		// 	)
		// } catch (error) {
		// 	return ctx.app.emit("error", new Error(error), ctx)
		// }

		ctx.body = {
			status: 200,
			message: "上传成功",
			result: {
				filename: ctx.request.files.avatar.originalFilename,
				filepath: filepath,
			},
		}
	}

	// 修改用户信息
	async updateUserInfo(ctx, next) {
		const user = ctx.request.body
		const user_id = ctx.request.body.user_id || ctx.user.user_id
		try {
			const resRole = await roleModel.findOne({ role_id: user.role_id })
			let res = await userModel.findOneAndUpdate(
				{ _id: user._id },
				{ ...user, role: resRole.role }
			)
			ctx.user = res
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 修改用户状态
	async updateUserState(ctx, next) {
		const state = ctx.request.body.state
		const user_id = ctx.request.body.user_id || ctx.user.user_id
		try {
			await userModel.findOneAndUpdate({ user_id }, { state })
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 获取用户列表
	async getUserList(ctx, next) {
		try {
			const { name, status, pageSize = 10, pageNum = 1 } = ctx.request.query
			const query = {}
			if (name) query.nick_name = name
			if (status) query.state = status
			const userList = await userModel
				.find({ ...query }, { password: 0, hashPassword: 0 })
				.skip((pageNum - 1) * pageSize)
				.limit(pageSize)
			ctx.userList = userList
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}
}

module.exports = new UserMiddleware()
