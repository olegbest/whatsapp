const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const curl = new (require('curl-request'))();
const twilio = require('twilio');
const accountSid = 'AC4f2059c0fb4f7e820c7dd015427c8b56'; // Your Account SID from www.twilio.com/console
const authToken = 'c8d88b4d474a866bf8b90abd5a5752dc';
const client = new twilio(accountSid, authToken);

const app = express();
const port = 5125;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post("/test", async function (req, res) {
    console.log("Rabotaet");
    console.log(req.body);
    console.log(req.From    );
    client.messages.create({
        to: `${req.body.From}`,  // Text this number
        from: 'whatsapp:+14155238886', // From a valid Twilio number
        body: 'Hello from Node'
    })
        .then((message) => console.log(message.sid));
    // res.sendStatus(200)
});


app.listen(port, function () {
    console.log("running: port")
});
