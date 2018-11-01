const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getList = app => {
	app.get('/api/cssGetList', (req, res) => {
		const currentPage = Number.parseInt(req.query.currentPage) || 1
		const currentSize = Number.parseInt(req.query.currentSize) || 10
		const type = req.query.type || '1'
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			id: String,
			title: String,
			date: Date,
			content: String,
			order: String,
			type: String
		}
		const collectionName = 'css_modules'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)

		let condition = {type: type}
		if (type === '5' || type === '6') {
			condition = {}
		}

		Model.countDocuments(condition, (err, count) => {
			if (err) {
				console.log(err)
			} else {
				Model.find(condition).skip((currentPage - 1) * currentSize).sort({date: 1}).limit(currentSize).then(data => {
					let result = {
						code: 200,
						message: '请求成功',
						body: {
							records: [],
							currentPage: currentPage,
							currentSize: currentSize,
							totalrecord: count
						}
					}
					// 重新遍历一个ID值
					if (data.length) {
						let addId = []
						addId = data.map((item, index) => {
							item.id = index + 1 + (currentPage - 1) * currentSize
							return item
						})
						result.body.records = data
					} else {
						result.body = null
					}
					res.send(result)
					db.close()
				})
			}
		})
	})
}

module.exports = getList