const http= require('http');
const fs = require('fs');

// Read messages from file
function readMessages() {
    try {
      const messages = fs.readFileSync('messages.txt', 'utf8').split('\n').filter(Boolean);
      return messages;
    } catch (err) {
      console.error('Error reading messages:', err);
      return [];
    }
  }
  

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        const messages = readMessages();
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(<ul>
          ${messages.map((msg) => `<li>${msg}</li>`).join('')}
        </ul>)
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
        req.on('end', ()=>{
            const paresedBody = Buffer.concat(body).toString();
            const message = paresedBody.split("=")[1];
            fs.writeFileSync('message.txt', message);
            console.log(message)
        });
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Welcome!!</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(3000);