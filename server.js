// server.js
// where your node app starts

// init project
var bodyParser =  require('body-parser')
var cors = require('cors')
var multer = require('multer')
var express = require('express')
var upload = multer({ dest: 'uploads/' })
var app = module.exports = express()
app.use(bodyParser.json());
app.use(cors())


// app.get('/',function(req,res,next){
// res.sendFile(__dirname + "/views/index.html");
// });

app.post('/upload',upload.single('file'),function (req,res,next){
return res.json(req.file);
});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + 'public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

// Simple in-memory store


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})