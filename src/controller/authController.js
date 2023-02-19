const jwt = require("jsonwebtoken")
const { PRIVATE_KEY } = require("../config/index")
class AuthController {
	//登录
	login(ctx, next) {
		// 生成token
		const token = jwt.sign({ ...ctx.user }, PRIVATE_KEY, {
			algorithm: "RS256",
			expiresIn: "2 days", // token有效时间一天
		})
		// debugger
		ctx.body = {
			status: 200,
			message: "登录成功",
			result: {
				data: ctx.user,
				token: `Bear ${token}`,
			},
		}
	}

	register(ctx, next) {
		ctx.body = {
			status: 201,
			message: "注册成功",
			result: {
				data: [],
			},
		}
	}
}

module.exports = new AuthController()
