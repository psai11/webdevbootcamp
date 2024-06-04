// HINTS:
// 1. Import express and axios
import axios from "axios";
import express, { json } from "express";

// 2. Create an express app and set the port number.
const port = 3000; 
const app = express();

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/", async(req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random"); 
        const data = result.data;
        console.log(result, result.data, data);
        res.render("index.ejs", {
            secret: data["secret"],
            user: data["username"],
        });
    } catch (error) {
        console.log(JSON.stringify(error.message));
        res.render("index.ejs", {
            secret: "error",
            user: "error"
        });        
    }
    
});

// 6. Listen on your predefined port and start the server.
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})