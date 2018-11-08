const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5125;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post("/test", function (req, res) {
    console.log("Rabotaet");
    console.log(req.body);
    res.send(200)
})


app.listen(port, function () {
    console.log("running: port")
})
