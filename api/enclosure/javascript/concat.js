const js = app => {
	const addItem = require('./addItem.js')(app)
	const delItem = require('./deleteItem.js')(app)
	const getList = require('./list.js')(app)
	const getSingleItem = require('./getSingleItem.js')(app)
	const editItem = require('./editItem.js')(app)
}

module.exports = js