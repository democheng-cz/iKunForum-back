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
		ctx.body = {
			status: 201,
			message: "修改成功",
			result: {
				data: [],
			},
		}
	}

	// 修改用户状态
	updateUserState(ctx, next) {
		ctx.body = {
			status: 201,
			message: "修改成功",
			result: {
				data: [],
			},
		}
	}

	// 获取用户列表
	getUserList(ctx, next) {
		const { userList } = ctx
		ctx.body = {
			status: 200,
			message: "请求成功",
			result: {
				data: userList,
			},
		}
	}
}

module.exports = new UserController()
