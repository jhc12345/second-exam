const express = require('express')
const nunjucks = require('nunjucks')
const app = express();

app.get('/', (req, res) => {res.sendFile(__dirname + '/home.html')});

app.listen(3000)