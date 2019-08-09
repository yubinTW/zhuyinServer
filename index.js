const { JSZhuyin } = require('jszhuyin');
const http = require('http');

const server = http.createServer((request, response) => {

    if (request.method != 'POST') {
        response.writeHead(405);
        response.end('ERROR 405');
        return
    }
    
    let postData = '';
    request.on('data', function (data) {
        postData += data;
    });
    
    request.on('end', function () {
        var jszhuyin = new JSZhuyin();
        jszhuyin.load();
        
        let data = '';
        try {
            data = JSON.parse(postData);
        } catch(e) {
            response.writeHead(400);
            response.end('JSON ERROR');
            return
        }
        if (data.length === 0) {
            response.writeHead(400);
            response.end('ERROR 400');
            return
        }
        
        jszhuyin.oncandidateschange = function (c) {
            jszhuyin.unload();
            result = {
                text: c[0][0]
            }
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(result));
        };

        jszhuyin.handleKey(data['text']);
    });
});

server.listen(8666);
console.log('server started at port 8666')