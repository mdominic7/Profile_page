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
mongoose.connect("mongodb://mdominic7:mariacomputers1963@ds131743.mlab.com:31743/profile_app",options);

// set view engine
app.set("view engine","ejs");


// User submitting an enquiry
var User=require("./models/user");

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

app.post("/home/enquiry",function(req,res){
	var user=req.body.enquiry;
	User.create(user,function(err,newenquiry){
		if(err)
		{
			console.log("Something went wrong");
		}
		else{
			console.log("Yeppee!! Succesfully added enquiry!: ",newenquiry);
			res.redirect("/home");

		}
	})
});

app.get("/home/resume",function(req,res) {

	res.render("cv");
});





// process.env.PORT
 app.listen(process.env.PORT,function () {
	// body...
	console.log("The Portfolio Server Started!");
});