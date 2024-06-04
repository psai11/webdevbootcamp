import express from "express";

const app = express();
const port = 3000

app.get("/", function(req, res) {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at 8====D");
});

app.post("/register", (req, res) => {
    res.sendStatus(201)
});

app.put("/user/psoi", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/psoi", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/psoi", (req, res) => {
    res.sendStatus(200);
});


app.get("/about", function(req, res) {
    res.send("Mai Chaitnya hu, mai hockey ka bohot bada fan hu.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>valoo</li><li>valoo</li><li>valoo</li></ul>");
});

app.listen(port, function() {
    console.log(`Server started on port ${port}.`);
});