var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
	name:String,
	email:String,
	query:String
});



module.exports=mongoose.model("User",UserSchema);
