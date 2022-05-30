const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var phoneNo = req.body.phone;
    res.send('<a href="https://wa.me/+91' + phoneNo + '">click here</a>');
    // res.send(phoneNo);
});

app.listen(3000, function () {
    console.log("server started at localhost:3000");
})