const fs = require('fs');

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/test') {
        response.write('<html>');
        response.write('<form method="POST" action="/message"> <input type="text" name="message"> <button type="submit"> enviar </button> </form>')
        response.write('</html>');
        return response.end()
    }

    if (url === '/message' && method === 'POST') {
        const body = []
        request.on('data', (value) => {
            body.push(value)
        })
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString().split('=')[1].split("+");
            let corpo = '';
            for (let index = 0; index < parsedBody.length; index++) {
                corpo += parsedBody[index] + ' ';
            }
            console.log(corpo)
            fs.writeFile('hello.txt', corpo, error => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            })
        })
    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<strong> hello from nodejs</strong>');
    response.write('</html>');
    response.end();
}

module.exports = requestHandler;
/*
module.exports = {
    handler: requestHandler,
    text: "hello module"
}

module.exports.hand = requestHandler;
exports.h = requestHandler;*/
