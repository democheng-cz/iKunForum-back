/**
 * 用户统一处理错误的函数
 *
 */
const errorTypes = require("../constant/errorTypes")

function errorHandle(err, ctx) {
	let message
	let resStatus
	console.log(err.message)
	switch (err.message) {
		case errorTypes.USER_OR_PASSWORD_EMAIL_IS_NOT_EMPTY:
			resStatus = 400
			message = "用户名或者密码或者邮箱必须输入"
			break
		case errorTypes.USER_ALREADY_EXISTS:
			resStatus = 409 // conflict
			message = "该用户已存在"
			break
		case errorTypes.EMAIL_OR_PASSWORD_IS_NOT_EMPTY:
			resStatus = 400
			message = "邮箱或者密码不能为空"
			break
		case errorTypes.USER_IS_NOT_EXISTS:
			resStatus = 409
			message = "该用户不存在"
			break
		case errorTypes.PASSWORD_IS_NOT_RIGHT:
			resStatus = 400
			message = "密码不正确"
			break
		case errorTypes.TOKEN_IS_NOT_AUTHORIZATION:
			resStatus = 401
			message = "token未验证"
			break
		case errorTypes.NO_RIGHTS:
			resStatus = 401
			message = "没有权限"
			break
		case errorTypes.SERVICE_IS_WRONG:
			resStatus = 500
			message = "服务器内部出错"
			break
		case errorTypes.CHECK_THE_PARAMS_TO_SQL:
			resStatus = 400
			message = "请检查传入sql语句的参数"
			break
		case errorTypes.DUPLICATE_LABEL:
			resStatus = 400
			message = "标签重复"
			break
		case errorTypes.INVALID_TOKEN:
			resStatus = 403
			message = "非法的token"
			break

		case errorTypes.MUST_TOKEN:
			resStatus = 403
			message = "必须携带token"
			break
		case errorTypes.TOKEN_EXPIRED:
			resStatus = 401
			message = "token已过期"
			break
		default:
			// console.log("为什么")
			resStatus = 404
			message = "NOT FOUND1111"
	}
	ctx.body = {
		code: resStatus,
		message: message,
		result: [],
	}
}

module.exports = errorHandle
