const crypto = require("crypto")

function md5Password(password) {
	const hashPwd = crypto.createHash("md5").update(password).digest("hex")

	return hashPwd
}

module.exports = {
	md5Password,
}
