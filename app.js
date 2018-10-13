var express=require("express");
var app=express();

// body parser
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// serve custom stylesheets
app.use(express.static("public"));

// mongoose
var	mongoose=require("mongoose");
// connect to the mongoDBcat_app is the name of the DB to connect to, if none exists,it will be newly created
var options={
	useNewUrlParser:true,
};
mongoose.connect("mongodb://localhost:27017/portfolio_app_test1",options);

// set view engine
app.set("view engine","ejs");

// routes
app.get("/",function(req,res) {

	res.render("landing");
});

app.get("/profile",function (req,res) {
	
	res.render("index");
});

 app.listen(3000,function () {
	// body...
	console.log("The Portfolio Server Started!");
});