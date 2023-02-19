function returnObj(obj) {
	const newObj = {}
	for (const key in obj) {
		if (key !== "_id" || key !== "password" || key !== "hashPassword") {
			newObj[key] = obj[key]
		}
	}

	return newObj
}

module.exports = {
	returnObj,
}
