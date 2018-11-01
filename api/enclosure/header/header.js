const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getHeader = app => {
	app.get('/api/header', (req, res) => {
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			index: String,
			label: String
		}
		const collectionName = 'headers'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)

		const condition = {index: /\d/g}
		Model.find(condition).sort({index: 1}).then(data => {
			const result = {
				code: 200,
				message: '请求成功',
				body: null
			}
			if (data.length) {
				result.body = data
			} else {
				result.code = 400
				result.message = '请求失败'
			}
			res.send(result)
			db.close()
		})
	})
}

module.exports = getHeader