const fs = require("fs")

const useRoutes = function () {
	const filesName = fs.readdirSync(__dirname)
	filesName.forEach(fileName => {
		if (fileName !== "index.js") {
			const file = require(`./${fileName}`)
			this.use(file.routes())
			this.use(file.allowedMethods())
		}
	})
}

module.exports = useRoutes
