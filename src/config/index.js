const fs = require("fs")
const path = require("path")

console.log(__dirname)

const PRIVATE_KEY = fs.readFileSync(
	path.resolve(__dirname, "../config/keys/private.key"),
	{
		encoding: "utf8",
	}
)
const PUBLIC_KEY = fs.readFileSync(
	path.resolve(__dirname, "../config/keys/public.key"),
	{ encoding: "utf8" }
)

module.exports = {
	PRIVATE_KEY,
	PUBLIC_KEY,
}
