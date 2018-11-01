const records = app => {
	const delItem = require('./deleteItem.js')(app)
	const addItem = require('./addItem.js')(app)
	const changeReadStatus = require('./changeReadStatus.js')(app)
	const getList = require('./list.js')(app)
}

module.exports = records