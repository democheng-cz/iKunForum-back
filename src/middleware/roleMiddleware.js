const roleModel = require("../model/role")

class RoleMiddleware {
	// 添加role
	async addRole(ctx, next) {
		const { role, role_id, menuList } = ctx.request.body
		try {
			roleModel.create({ role, role_id, menuList })
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 通过角色获取路由
	async getMenuList(ctx, next) {
		const { role_id } = ctx.request.params
		try {
			const res = await roleModel.findOne({ role_id })
			ctx.menuList = res.menuList
			await next()
		} catch (error) {
			// console.log(error)
			return crx.app.emit("error", new Error(error), ctx)
		}
	}

	// 获取所有的role
	async getRoles(ctx, next) {
		const res = await roleModel.find({}, { menuList: 0 })
		ctx.roles = res
		await next()
	}
}

module.exports = new RoleMiddleware()
