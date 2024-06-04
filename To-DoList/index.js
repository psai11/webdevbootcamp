import express from "express";
import bodyParser from "body-parser";

const app = express();

const items = [];
const workItems = [];

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res){
  const day = new Date().toLocaleDateString("en-US", options);
  res.render("index.ejs", {listTitle: day, newListItem: items});
});

app.post('/', function(req, res){
  const item = req.body.newItem;
  if(req.body.list === "Work"){
    if(item != ""){
      workItems.push(item);
    }
    res.redirect("/work");
  }else{
    if(item != ""){
      items.push(item);
    }
    res.redirect("/");
  }
  
});

app.get('/work', function(req, res){
  res.render("index.ejs", {listTitle: "Work List", newListItem: workItems})
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on PORT 3000");
});














