function move() {
    $('.rect1').each(function(index,element){
    	element.classList.add('movingLeft');
    })
    $('.rect2').each(function(index,element){
    	element.classList.add('movingRight');
    })}
function move2() {
    $('.rect3').each(function(index,element){
    	element.classList.add('movingLeft');
    })
    $('.rect4').each(function(index,element){
    	element.classList.add('movingRight');
    })
}

function come() {
    $('.rect1').each(function(index,element){
    	element.classList.remove('movingLeft');
    })

    $('.rect2').each(function(index,element){
    	element.classList.remove('movingRight');
    })}
function come2() {   
    $('.rect3').each(function(index,element){
    	element.classList.remove('movingLeft');
    })
    $('.rect4').each(function(index,element){
    	element.classList.remove('movingRight');
    })
}