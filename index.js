var express = require('express');
const { Http2ServerRequest } = require('http2');

var app = express();


// Listen on random port
// What are we listening to? address
const server = app.listen(0, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}/ on ${server.address().address}`); // Sever listening to port ...
});

// actual event request
server.on("request", (req, res) => res.end("ok"))

// this is useful if you don't know what ports are going to be reserved
// :: is for ipv6 => 0.0.0.0 is for ipv4
// unspecified address: invalid address. You can't use this physically on the network but software can. 
// Every interface, i.e. Wifi, 5G network, LAN, ethernet, my code by default listens to all of them. Be careful! 
app.listen(0, "localhost");  