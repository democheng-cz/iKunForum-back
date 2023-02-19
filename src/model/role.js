const mongoose = require("./index")

const roleSchema = mongoose.Schema({
	role: {
		type: String,
	},
	roleType: Number,
	menuList: {
		type: [{}],
	},
})

const roleModel = mongoose.model("role", roleSchema)

module.exports = roleModel
