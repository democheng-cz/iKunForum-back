const path = require("path")

const Koa = require("koa")
const koaBody = require("koa-body").default
const koaStatic = require("koa-static")

const mongoose = require("./model")
const useRoutes = require("./router")
const errorHandle = require("./middleware/errorMiddleware")

const app = new Koa()

app.useRoutes = useRoutes

// 解析body中的json参数
app.use(
	koaBody({
		multipart: true,
		formidable: {
			// 上传目录
			uploadDir: path.join(__dirname, "./static/test"),
			// 保留文件扩展名
			keepExtensions: true,
			multipart: true,
		},
	})
)

// 暴露本地静态文件
app.use(koaStatic(path.resolve(__dirname, "./static")))

// 注册所有路由
app.useRoutes()

// 注册统一处理错误的中间件
app.on("error", errorHandle)
app.listen(8888, () => {
	console.log("服务器启动成功")
	mongoose.connection.once("open", () => {
		console.log("数据库连接成功")
	})
})
