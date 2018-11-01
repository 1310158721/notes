const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const editItem = app => {
	app.post('/api/iscrollEditItem', (req, res) => {
		const _id = req.body._id || ''
		const title = req.body.title || ''
		const content = req.body.content || ''
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			id: String,
			title: String,
			date: Date,
			content: String
		}
		const collectionName = 'iscroll_modules'
		// versionKey: false  ==>  避免插入数据时生成__v这种版本号
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)
		const condition = {_id: _id}
		Model.updateOne(condition, {$set: {title: title, content: content}}, {new: true}, function (err, doc) {
			let result = {
				code: 200,
				message: '数据更新成功',
				body: null
			}
			if (doc.ok !== 0) {
				result.message = '数据更新成功'
			} else {
				result.code = 400	
				result.message = '数据更新失败，没有这个数据'
			}
			res.send(result)
			db.close()
		})
	})
}

module.exports = editItem