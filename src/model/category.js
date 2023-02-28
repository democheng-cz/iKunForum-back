const mongoose = require("mongoose")
const { v4: uuidV4 } = require("uuid")
const categorySchema = new mongoose.Schema(
	{
		category_name: {
			type: String,
		},
		category_id: {
			type: String,
			default: uuidV4(),
		},
	},
	{
		timestamps: {
			createdAt: "created",
			updatedAt: "updated",
		},
	}
)

const categoryModel = mongoose.model("category", categorySchema)
module.exports = categoryModel
