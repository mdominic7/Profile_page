var loc=document.URL;

var items=loc.split("/");

var page=items[4];

console.log(page);
var ele;


console.log(ele);
switch(page)
{
	case 'about':  	  ele=document.getElementById(page);	
					  ele.className+='active';
					  break;	
	
	case 'projects':  ele=document.getElementById(page);	
					  ele.className+='active';
					  break;

	case 'certificates':ele=document.getElementById(page);	
					  ele.className+='active';
					  break;	
	
	case 'enquiry':   ele=document.getElementById(page);	
					  ele.className+='active';
					  break;	
					  	
	case 'resume':   ele=document.getElementById(page);	
					  ele.className+='active';
					  break;
	
}
