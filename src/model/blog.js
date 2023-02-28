const mongoose = require("mongoose")
const { v4: uuidv4 } = require("uuid")

const blogSchema = mongoose.Schema({
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
	create_time: {
		type: Date,
		default: Date.now,
	},
	update_time: {
		type: Date,
		default: Date.now,
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
})

const blogModel = mongoose.model("blog", blogSchema)

module.exports = blogModel
