$('.nav-item').click(function() {
	var button_name = $(this).data('button');

	$('.content').attr( 'class' , 'column content');
	$('.content').addClass(button_name);

	$('.nav-item').removeClass('active');
	$('.about-text').addClass('hide');
	$(this).addClass('active');

	if(button_name == 'Real',
					  'True', 
					  'Actual',
					  'Absolute', 
					  'Genuine', 
					  'Authentic', 
					  'Sincere', 
					  'Accurate',
					  'Realistic', 
					  'Veritable',
					  'blank') {
		$('.lightbox').removeClass('hide');
		$('audio')[0].play();
	} 
});

$('.close-button').click(function() {
	$('.lightbox').addClass('hide');
	$('audio')[0].pause();
	$('.nav-item').removeClass('active');
})