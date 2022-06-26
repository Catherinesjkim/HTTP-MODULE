const http = require("http");
const httpserver = http.createServer();

// actual event request
httpserver.on("request", (req, res) => res.end("ok"))

httpserver.on("listening", () => {
    console.log(`Server 4 Listening on port http://localhost:${httpserver.address().port}/ on ${httpserver.address().address} family ${httpserver.address().family}`); // Sever listening to port ...
});

// :: is for ipv6 => 0.0.0.0 is for ipv4
// unspecified address: invalid address. You can't use this physically on the network but software can. 
httpserver.listen(0, "127.0.0.1"); // I only want to listen on the ipv4 loop back




const httpserver6 = http.createServer();

// actual event request
httpserver6.on("request", (req, res) => res.end("ok"))

httpserver6.on("listening", () => {
    console.log(`Sever 6 Listening on port http://localhost:${httpserver6.address().port}/ on ${httpserver6.address().address} family ${httpserver6.address().family}`); // Sever listening to port ...
});

// :: is for ipv6 => 0.0.0.0 is for ipv4
// unspecified address: invalid address. You can't use this physically on the network but software can. 
httpserver6.listen(0, "::1"); // I only want to listen on the ipv4 loop back

