var jsonServer = require('json-server')

var server = jsonServer.create()

server.use(jsonServer.defaults())

var router = jsonServer.router('db.json')
server.use(router)

console.log('listening on 3000')
server.listen(3000)
