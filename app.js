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
mongoose.connect("mongodb://localhost:27017/portfolio_app_test2",options);

// set view engine
app.set("view engine","ejs");

// routes
app.get("/",function(req,res) {

	res.redirect("/home");
});

app.get("/home",function(req,res) {

	res.render("landing");
});

app.get("/home/profile",function (req,res) {
	
	res.render("index");
});

app.get("/home/about",function(req,res) {

	res.render("about");
});

// app.get("/home/gallery",function(req,res) {

// 	res.render("gallery");
// });

app.get("/home/projects",function(req,res) {

	res.render("projects");
});

app.get("/home/certificates",function(req,res) {

	res.render("certificates");
});

app.get("/home/enquiry",function(req,res) {

	res.render("enquiry");

});


app.get("/home/resume",function(req,res) {

	res.send("Page yet to be constructed");
});






 app.listen(3000,function () {
	// body...
	console.log("The Portfolio Server Started!");
});