const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

//Default
app.get("/", function(req, res) {
    res.send("use either /simplecalculator or /bmicalculator");
});

//BMI Calculator
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = Math.round(weight / (height * height));

    res.send("The BMI is "+ bmi);
});

//Simple Calculator
app.get("/simplecalculator", function(req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/simplecalculator", function(req, res) {
    // console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;
    res.send("The result is "+result);
});

app.listen(3000, function(){
    console.log("Server is started at port 3000")
});

