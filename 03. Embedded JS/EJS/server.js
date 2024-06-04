import express from "express";
import ejs from "ejs";
// import dirname from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date("July 17, 1983 01:15:00");
    let day = d.getDay();
    // console.log(day);

    let type = "a weekday";
    let adv = "work hard";

    if(day === 0 || day=== 6) {
        type = "a weekend";
        adv = "have fun"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    }); 
    
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
