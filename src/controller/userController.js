const { returnObj } = require("../utils/returnUserObj")

class UserController {
	//返回menu数据
	async menuList(ctx, next) {
		const { user, role } = ctx
		// console.log(user)
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
	}

	// 修改信息
	updateUserInfo(ctx, next) {
		const user = ctx.user
		delete user._id
		ctx.body = {
			status: 201,
			message: "修改成功",
			result: {
				data: [],
			},
		}
	}
}

module.exports = new UserController()
