const mongoose = require("./index")

const userSchema = mongoose.Schema({
	account: {
		type: String,
	},
	password: String,
	hashPassword: String,
	user_id: Number,
	avatar: String,
	createAt: {
		type: Date,
		default: Date.now,
	},
	updateAt: {
		type: Date,
		default: Date.now,
	},
	email: {
		type: String,
		required: true,
	},
	nick_name: String,
	role: {
		type: String,
		required: true,
	},

	// 0:禁用
	// 1:启用
	state: {
		type: Number,
		default: 1,
	},
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
