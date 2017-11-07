// $('.nav-item').click(function(){
//  	if($(this).hasClass('apple-button')){
//  		$('.apple').removeClass('hide');
//  	}
// 	else if($(this).hasClass('nike-button')){
//  		$('.nike').removeClass('hide');
//  	}
//  	else if($(this).hasClass('disney-button')){
//  		$('.disney').removeClass('hide');
//  	} 
//  	else{
//  		$('.vogue').removeClass('hide');
//  	}
// });

// $('.nav-item').click(function(){
// 	var target_horse = $(this).data('horse');
// 	$(target_horse).removeClass('hide'); 
// 	// $(target_house... has a dot in it,
// 	//it's given that's why there's dot in html for apple,nike,disney,vogue
// });



// $('.nav-item').click(function(){
// 	var target = $(this).data('horse');
// 	var img_to_show; 

// 	if (target == 'apple'){  //== is checking and = is setting
// 		img_to_show = '<img class="apple" src="assets/img/Apple.png">';
// 	} else if (target == 'nike'){
// 		img_to_show = '<img class="nike" src="assets/img/Nike.png">'
// 	} else if (target == 'disney'){
// 		img_to_show = '	<img class="disney" src="assets/img/Disney.png">'
// 	} else {
// 		img_to_show = '<img class="vogue" src="assets/img/Vogue.png">'
// 	}

//  $('.content').append(img_to_show);
// });



$('.nav-item').click(function(){
	var img = $(this).data('img');
	var class_name = $(this).data('classname');
	var img_to_show = '	<div class=" ' +class_name+' logo "><img class="apple-logo" src="assets/img/' + img+ ' "/></div>';

 $('.content').prepend(img_to_show);
});

	
 	
 	
