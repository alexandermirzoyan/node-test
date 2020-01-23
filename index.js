var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   // res.send("<h1>Hello " + name +"</h1>");
   res.redirect('http://google.com')
});
app.get("/google/:query", (req, res) => {
   let query = req.params.query;
   res.redirect(`http://google.com/search?q=${query}`);
});
app.use((req,res,next) => {
   res.status(404).send("Sorry can't find that!");
})
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

