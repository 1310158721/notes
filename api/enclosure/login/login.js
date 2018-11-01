const access = require('../../common/common.js').access
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const canLogin = app => {
	app.post('/api/login', (req, res) => {
		const username = req.body.username
		const password = req.body.password
		access(res)
		const uri = 'mongodb://127.0.0.1:19999/note'
		const db = mongoose.createConnection(uri, { useNewUrlParser: true })
		const schemaType = {
			username: String,
			password: String
		}
		const collectionName = 'users'
		let schema = new Schema(schemaType)
		let Model = db.model(collectionName, schema)

		const condition = {username: username, password: password}
		Model.find(condition).then(data => {
			const result = {
				code: 200,
				message: '请求成功',
				body: null
			}
			if (data.length === 0) {
				result.code = 400
				result.message = '请求失败, 没有该用户'
			} else if (data.length > 1) {
				result.code = 400
				result.message = '存在多个用户，请确保一个用户只有一条数据'
			}
			res.send(result)
			db.close()
		})
	})
}

module.exports = canLogin