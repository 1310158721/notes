const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const getHeader = app => {
	app.get('/api/left-nav', (req, res) => {
		const module = req.query.module || 'node'
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			module: String,
			body: [
				{
					id: String,
					label: String,
					icon: String,
					children: [
						null,
						{
							id: String,
							label: String,
							icon: String,
							children: null
						}
					]
				}
			]
		}
		const collectionName = 'leftnavs'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)
		const condition = {module: module}
		Model.find(condition).then(data => {
			const result = {
				code: 200,
				message: '请求成功',
				body: null
			}
			if (data.length) {
				result.body = data[0].body
			} else {
				result.code = 400
				result.message = '请求失败, 参数有问题'
			}
			res.send(result)
			db.close()
		})
	})
}

module.exports = getHeader