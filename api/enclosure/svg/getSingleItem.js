const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getSingleItem = app => {
	app.get('/api/svgSingleItem', (req, res) => {
		// 参数名必须为12或24位
		const _id = mongoose.Types.ObjectId(req.query._id) || ''
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			id: String,
			title: String,
			date: Date,
			content: String
		}
		const collectionName = 'svg_modules'
		// versionKey: false  ==>  避免插入数据时生成__v这种版本号
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)
		const condition = {_id: _id}
		Model.find(condition).then(data => {
			let result = {
				code: 200,
				message: '请求成功',
				body: null
			}
			if (data.length) {
				result.body = data
			} else {
				result.code = 400
				result.message = '请求失败，参数异常'
			}
			res.send(result)
			db.close()
		})
	})
}

module.exports = getSingleItem