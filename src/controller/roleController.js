class RoleController {
	// 添加roleType
	addRole(ctx, next) {
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: [],
			},
		}
	}

	// 获取该角色对应的菜单
	getMenuList(ctx, next) {
		const { menuList } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: menuList,
			},
		}
	}

	// 获取所有的roles
	getRoles(ctx, next) {
		const { roles } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: roles,
			},
		}
	}
}

module.exports = new RoleController()
