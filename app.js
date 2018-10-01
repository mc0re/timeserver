const http = require('http');
const os = require('os');
const ip = require("ip");

const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);

    var oper = request.url.substring(1);
    var str = "";

    if (! oper.includes(".")) {
        str = str + "Operation: " + oper + "\n";
    }

    str = str + "Time: " + new Date().toTimeString() + "\n";
    str = str + "Host: " + os.hostname() + "\n";
    str = str + "IP: " + ip.address() + "\n";
    response.end(str);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }

    console.log(`Listening on port ${port}`);
})
