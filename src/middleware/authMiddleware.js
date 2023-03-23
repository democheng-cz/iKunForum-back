const { promisify } = require("util")

const jwt = require("jsonwebtoken")

const errorTypes = require("../constant/errorTypes")
const userModel = require("../model/user")
const { md5Password } = require("../utils/md5Password")
const { PUBLIC_KEY } = require("../config/index")
const { v4: uuidv4 } = require("uuid")

const verify = promisify(jwt.verify)
class AuthMiddleware {
	// 验证登录信息
	async verifyInfo(ctx, next) {
		// console.log("first")
		const { account, password } = ctx.request.body
		// 1.判断是否输入了账号和密码(一般由前端判断)
		// console.log(account, password)
		if (!account || !password) {
			const error = new Error(errorTypes.USER_OR_PASSWORD_EMAIL_IS_NOT_EMPTY)
			return ctx.app.emit("error", error, ctx)
		}
		// 2. 判断账号是否存在, 存在则判断密码是否正确
		try {
			const user = await userModel.findOne({ account: account })
			if (!user) {
				throw errorTypes.USER_IS_NOT_EXISTS
			}
			// 验证密码是否正确
			const hashPassword = md5Password(password)
			// 密码正确
			debugger
			if (hashPassword === user.hashPassword) {
				ctx.user = {
					account: user.account,
					user_id: user.user_id,
					role: user.role,
					state: user.state,
					createAt: user.createAt,
					updateAt: user.updateAt,
					nickname: user.nick_name || null,
					avatar: user.avatar || null,
					role_id: user._doc.role_id,
				}
				await next()
			} else {
				// 密码不正确
				throw errorTypes.PASSWORD_IS_NOT_RIGHT
			}
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 验证注册信息
	async verifyRegisterInfo(ctx, next) {
		const { account, password, email } = ctx.request.body
		// 1. 判断是否输入了账号和密码
		if (!account || !password || !email) {
			const error = errorTypes.USER_OR_PASSWORD_EMAIL_IS_NOT_EMPTY
			return ctx.app.emit("error", error, ctx)
		}

		// 2. 判断当前账号是否存在
		try {
			const user = await userModel.findOne({ account: account })
			// 账号已存在
			if (user) {
				throw errorTypes.USER_ALREADY_EXISTS
			}
			const obj = {
				...ctx.request.body,
				// user_id: Math.floor(Math.random() * 100000000),
				user_id: uuidv4(),
				hashPassword: md5Password(password),
			}
			await userModel.create(obj)
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}

	// 验证token
	async verifyToken(ctx, next) {
		const { authorization: token } = ctx.request.header
		if (!token) {
			return ctx.app.emit("error", new Error(errorTypes.MUST_TOKEN), ctx)
		}
		try {
			const result = await verify(token.split(" ")[1], PUBLIC_KEY, {
				algorithms: "RS256",
			})
			ctx.user = result
			await next()
		} catch (error) {
			return ctx.app.emit("error", new Error(error), ctx)
		}
	}
}

module.exports = new AuthMiddleware()
