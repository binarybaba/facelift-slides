var express = require("express");
var PORT = process.env.PORT || 5000;
var app = express();
app.use("/node_modules", express.static(__dirname+"/node_modules"));
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(PORT, function(){
    console.log("Listening on", PORT);
});
