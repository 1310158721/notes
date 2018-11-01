const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const changeReadStatus = app => {
	app.post('/api/recordsChangeReadStatus', (req, res) => {
		const _id = req.body._id || ''
		const type = req.body.type || '1'
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			id: String,
			date: Date,
			content: String,
			order: String,
			type: String
		}
		const collectionName = 'records_modules'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)

		let condition = {type: type, _id: _id}
		let newType = undefined
		if (type === '1') {
			newType = '2'
		} else {
			newType = '1'
		}
		
		Model.updateOne(condition, {$set: {type: newType}}).then(data => {
			let result = {
				code: 200,
				message: '更新数据成功',
				body: null
			}
			if (Number.parseInt(data.nModified) === 0) {
				result.code = 400
				result.message = '更新失败，没有该数据'
			}
			res.send(result)
			db.close()
		}).catch(err => {
			console.log(err)
		})
	})
}

module.exports = changeReadStatus