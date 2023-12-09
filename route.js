const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url=== '/message' && method==='POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const paresedBody = Buffer.concat(body).toString();
            const message = paresedBody.split("=")[1];
            fs.writeFileSync('message.txt', message, err => {
                console.log(ReadMessage(message));
                res.statusCode=302;
                res.setHeader('Location','/')
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome!!</h1></body>');
    res.write('</html>');
    res.end();
}

exports.handler = requestHandler;
exports.someText = 'Some code texts';