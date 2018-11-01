// Node 内部模块
const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getList = app => {
	app.get('/api/nodeGetList', (req, res) => {
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
		const collectionName = 'node_modules'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)

		let condition = {type: type}
		if (type !== '1' && type !== '2') {
			condition = {}
		}
		
		Model.find(condition).then(_data => {
			const recordCount = _data.length
			Model.find(condition).skip((currentPage - 1) * currentSize).sort({date: 1}).limit(currentSize).then(data => {
				const result = {
					code: 200,
					message: '请求成功',
					body: {
						records: [],
						currentPage: currentPage,
						currentSize: currentSize,
						totalrecord: recordCount || 0
					}
				}
				if (data.length) {
					// 重新遍历一个ID值
					let addID = []
					addID = data.map((item, index) => {
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
		}).catch(err => {
			console.log(err)
		})
	})
}

module.exports = getList