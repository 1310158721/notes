const swiper = app => {
	const addItem = require('./addItem.js')(app)
	const deleteItem = require('./deleteItem.js')(app)
	const getList = require('./list.js')(app)
	const getSingleItem = require('./getSingleItem.js')(app)
	const editItem = require('./editItem.js')(app)
}

module.exports = swiper