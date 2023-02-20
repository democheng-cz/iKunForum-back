const mongoose = require("mongoose")
const { v4: uuidV4 } = require("uuid")
const categorySchema = mongoose.Schema({
	category_name: {
		type: String,
	},
	category_id: {
		type: String,
		default: uuidV4(),
	},
})

const categoryModel = mongoose.model("category", categorySchema)
module.exports = categoryModel
