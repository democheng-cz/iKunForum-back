const mongoose = require("mongoose")

// 连接数据库
mongoose.connect("mongodb://localhost/blog")

module.exports = mongoose
