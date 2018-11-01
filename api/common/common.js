const access = res => {
	res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","content-type")
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS")
}


module.exports = {
	access
}