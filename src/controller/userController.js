const { returnObj } = require("../utils/returnUserObj")

class UserController {
	getMenuList(ctx, next) {
		const { user, role } = ctx
		debugger
		ctx.body = {
			status: 200,
			success: "请求成功",
			result: {
				data: {
					...returnObj(user),
					menuList: role.menuList,
				},
			},
		}
		console.log(returnObj(user))
	}
}

module.exports = new UserController()
