const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('./web/'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/web/index.html')
})

// 用户能否登陆成功
const canLogin = require(__dirname + '/enclosure/login/login.js')(app)

// 获取header数据
const getHeader = require(__dirname + '/enclosure/header/header.js')(app)

// 获取leftNav数据
const getLeftNav = require(__dirname + '/enclosure/leftNav/leftNav.js')(app)

// Node 模块相关
const node = require(__dirname + '/enclosure/node/concat.js')(app)

// Css 模块相关
const css = require(__dirname + '/enclosure/css/concat.js')(app)

// Js 模块相关
const js = require(__dirname + '/enclosure/javascript/concat.js')(app)

// Mvvm 模块相关
const mvvm = require(__dirname + '/enclosure/mvvm/concat.js')(app)

// Records 模块相关
const records = require(__dirname + '/enclosure/records/concat.js')(app)

// demo => canvas 模块相关
const canvas = require(__dirname + '/enclosure/canvas/concat.js')(app)

// demo => svg 模块相关
const svg = require(__dirname + '/enclosure/svg/concat.js')(app)

// plugin => swiper 模块相关
const swiper = require(__dirname + '/enclosure/swiper/concat.js')(app)

// plugin => iscroll 模块相关
const iscroll = require(__dirname + '/enclosure/iscroll/concat.js')(app)

app.listen(9000)