const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const blogSchema = mongoose.Schema(
	{
		blog_id: {
			type: String,
			default: uuidv4(),
		},
		category_id: String,
		category_name: String,
		desc: {
			type: String,
			default: null,
		},
		content: {
			type: String,
			default: null,
		},
		status: {
			type: Number,
			default: 1, // 0:未发布  1:已发布
		},
		title: {
			type: String,
		},
		user_name: {
			type: String,
		},
		cover: {
			type: String,
			default: null,
		},
		user_id: {
			type: String,
		},
		// update_time: {
		// 	type: Number,
		// },
		// create_time: {
		// 	type: Number,
		// },
	},
	{
		timestamps: { createdAt: "create_time", updatedAt: "update_time" },
	}
)

const blogModel = mongoose.model("blog", blogSchema)

module.exports = blogModel
