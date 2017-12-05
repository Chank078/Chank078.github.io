function addcircle(){ 

		var button = document.createElement("div"); //makes button
		button.classList.add("contents"); //add class
		var position = getRandom()+ "%";
		var height = Random()+ "%"; //get a number with %
	button.style.left= position;       	//set button style to that #
	button.style.top= height;  
	document.body.appendChild(button); 	//adds button to document
	
}
function getRandom(){
	return Math.random() * (100-50) + 50;
}
function Random(){
	return Math.random() * (100-20) + 20;
}


 	
