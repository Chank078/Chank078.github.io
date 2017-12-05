$('.button').click(function() {
	var objects = ['assets/img/Cicle.png',
				   'assets/img/Pentagon.png',
				   'assets/img/Square.png',
				   'assets/img/Star.png',
				   'assets/img/Triangle.png',
				   'assets/img/WhiteC.png',
				   'assets/img/WhiteP.png',
				   'assets/img/WhiteR.png',
				   'assets/img/WhiteS.png',
				   'assets/img/WhiteT.png',
				 ];

    var random_object_number = Math.floor(Math.random() * objects.length);
	var object_to_use = objects[random_object_number];
	var result = '';

	if (random_object_number < 100) {
		result = '<div class="object"><img src="' + object_to_use + '"/></div>';
	} else{
		result = '<div class="object ' + color_to_use + '">' + object_to_use + '</div>';
	}

	
 $('.content').prepend(result);
});
