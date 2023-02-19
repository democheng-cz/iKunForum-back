const roleModel = require("../model/role")

class UserMiddleware {
	// 根据角色获取菜单
	async getMenuList(ctx, next) {
		const { role } = ctx.user
		console.log(role)
		try {
			const result = await roleModel.findOne({ role })
			ctx.role = result
			next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}
}

module.exports = new UserMiddleware()
