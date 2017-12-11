
var limit= 0;

function addcircle(){ 

	if (limit > 15) {
	} else if (limit< 15){
		var button = document.createElement("div"); //makes button
		button.classList.add("contents"); //add class
		var position = getRandom()+ "%";
		var height = Random()+ "%"; //get a number with %
	button.style.left= position;       	//set button style to that #
	button.style.top= height;  
	document.body.appendChild(button); 	//adds button to document
		limit++;
	}
	
	
}
function getRandom(){
	return Math.random() * (100-50) + 50;
}
function Random(){
	return Math.random() * (100-0) + 0;
}

