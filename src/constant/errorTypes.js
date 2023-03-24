// 用户名/密码/邮箱不能为空
const USER_OR_PASSWORD_EMAIL_IS_NOT_EMPTY =
	"user_or_password_email_is_not_empty"

// 用户已存在
const USER_ALREADY_EXISTS = "user_already_exists"

// 邮箱/密码不能为空
const EMAIL_OR_PASSWORD_IS_NOT_EMPTY = "email_or_password_is_not_empty"

// 用户不存在
const USER_IS_NOT_EXISTS = "user_is_not_exists"

// 密码不正确
const PASSWORD_IS_NOT_RIGHT = "password_is_not_right"

// 未验证token
const TOKEN_IS_NOT_AUTHORIZATION = "token_is_not_authorization"

// 服务器内部出错
const SERVICE_IS_WRONG = `service_is_wrong`

// 没有权限
const NO_RIGHTS = `no_rights`

// 检查传入sql语句的参数
const CHECK_THE_PARAMS_TO_SQL = "CHECK_THE_PARAMS_TO_SQL"

// 标签重复
const DUPLICATE_LABEL = "duplicate_label"

// 非法token
const INVALID_TOKEN = "invalid_token"

// 必须携带token
const MUST_TOKEN = "must_token"

const TOKEN_EXPIRED = "jwt expired"

module.exports = {
	USER_OR_PASSWORD_EMAIL_IS_NOT_EMPTY,
	USER_ALREADY_EXISTS,
	EMAIL_OR_PASSWORD_IS_NOT_EMPTY,
	USER_IS_NOT_EXISTS,
	PASSWORD_IS_NOT_RIGHT,
	TOKEN_IS_NOT_AUTHORIZATION,
	SERVICE_IS_WRONG,
	NO_RIGHTS,
	CHECK_THE_PARAMS_TO_SQL,
	DUPLICATE_LABEL,
	INVALID_TOKEN,
	MUST_TOKEN,
	TOKEN_EXPIRED,
}
