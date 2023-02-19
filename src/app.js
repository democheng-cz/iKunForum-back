const Koa = require("koa")
// const bodyParser = require("koa-bodyparser")
const koaBody = require("koa-body").default

const mongoose = require("./model")
const useRoutes = require("./router")
const userModel = require("./model/user")
const errorHandle = require("./middleware/errorMiddleware")

const app = new Koa()

app.useRoutes = useRoutes

// 解析body中的json参数
app.use(
	koaBody({
		multipart: true,
	})
)

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