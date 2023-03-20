const mongoose = require("./index")

const userSchema = mongoose.Schema(
	{
		account: {
			type: String,
		},
		password: String,
		hashPassword: String,
		user_id: Number,
		avatar: {
			type: String,
			default: null,
		},
		email: {
			type: String,
			required: true,
		},
		nick_name: {
			type: String,
			default: null,
		},
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
	},
	{
		timestamps: { createdAt: "create_time", updatedAt: "update_time" },
	}
)

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
