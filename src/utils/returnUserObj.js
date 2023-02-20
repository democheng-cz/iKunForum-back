function returnObj(obj) {
	const newObj = {}
	Object.keys(obj).forEach(key => {
		if (key !== "_id" || key !== "password" || key !== "hashPassword") {
			newObj[key] = obj[key]
		}
	})

	return newObj
}

module.exports = {
	returnObj,
}
