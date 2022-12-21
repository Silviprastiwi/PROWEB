// const http = require('http');
var randomWords = require("random-words");
// console.log(randomWords());

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(function(req, res) {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(randomWords() + '\n');
// });

// server.listen(port, hostname, function() {
//   console.log('Server running at http://'+ hostname + ':' + port + '/');
// });

const express = require("express");
const cors = require("cors");
const app = express();
const port = 9000;
app.use(express.json());
app.use(cors());

app.get("/randomWords", (req, res) => {
  res.send(randomWords() + "\n");
});

app.post("/kelasCE", (req, res) => {
  // var a = req.body;
  // console.log(req.body.suhu)
  res.send("kelasmu ada di  " + req.body.kelasCE);
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`);
});
