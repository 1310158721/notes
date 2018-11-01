const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const delItem = app => {
	app.get('/api/jsDelItem', (req, res) => {
		const _id = req.query._id || ''
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			id: String,
			title: String,
			date: Date,
			content: String
		}
		const collectionName = 'js_modules'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)
		const condition = {_id: _id}
		Model.findOneAndDelete(condition, (err, doc) => {
			let result = {
				code: 200,
				message: '删除成功',
				body: null
			}
			if (err) {
				console.log(err)
			} else {
				if (!doc) {
					result.code = 400
					result.message = '删除失败，找不到对应的_id值'
				}
			}
			db.close()
			res.send(result)
		})
	})
}

module.exports = delItem