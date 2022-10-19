const koa = require("koa")

const app = new koa()

app.port = app.listen(8000, () => {
	console.log("服务器启动成功~")
})
