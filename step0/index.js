/**
 * Created by Administrator on 2017/11/23 0023.
 */
var http = require('http')

var server = http.createServer(function (request, response) {
    setTimeout(function () {
        response.setHeader('Content-Type','text/html; charset=utf-8')
        response.writeHead(200, 'haha')
        response.write('<html><head><meta charset="utf-8" /></head>')
        response.write('<body>')
        response.write('<h1>你好</h1>')
        response.write('</body>')
        response.write('</html>')
        response.end()
    }, 2000)
})
server.listen(8011)