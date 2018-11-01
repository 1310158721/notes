const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const addItem = app => {
	app.post('/api/mvvmAddItem', (req, res) => {
		const title = req.body.title || ''
		const content = req.body.content || ''
		const date = new Date()
		const type = req.body.type || ''
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			title: String,
			date: Date,
			content: String,
			type: String
		}
		const collectionName = 'mvvm_modules'
		// versionKey: false  ==>  避免插入数据时生成__v这种版本号
		let schema = new Schema(schemaType, {versionKey: false})
		let Model = db.model(collectionName, schema)
		Model.insertMany({title: title, date: date, content: content, type: type}).then((doc) => {
			let result = {
				code: 200,
				message: '添加数据成功',
				body: null
			}
			if (!doc) {
				result.code = 400
				result.message = '添加数据失败'
			}
			db.close()
			res.send(result)
		})
	})
}

module.exports = addItem