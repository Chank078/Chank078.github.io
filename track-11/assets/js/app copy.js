var YN= "url('../img/3tier.png')";
var None;

function addsparks(){
	// var button=document.createElement("div");
	// button.classList.add("sparks");
	None = setInterval(addpng, 1000);
}

function addpng(){
if (YN == ""){
	YN = "url('../img/3tier.png')";
} else if( YN == "url('../img/3tier.png')") {
	YN = "";
}
document.getElementsByClassName("center circle")[0].style.backgroundx= YN;
};
