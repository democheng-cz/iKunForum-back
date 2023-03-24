const mongoose = require("./index")

const roleSchema = mongoose.Schema(
	{
		role: {
			type: String,
		},
		role_id: Number,
		menuList: {
			type: [{}],
		},
	},
	{
		timestamps: { createdAt: "create_time", updatedAt: "update_time" },
	}
)

const roleModel = mongoose.model("role", roleSchema)

module.exports = roleModel
