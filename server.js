const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080 , function () {
    console.log('listening at ', process.env.PORT || 8080);
});