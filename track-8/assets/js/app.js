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
function move3() {
    $('.rect5').each(function(index,element){
        element.classList.add('movingLeft');
    })
    $('.rect6').each(function(index,element){
        element.classList.add('movingRight');
    })
}
function move4() {
    $('.rect7').each(function(index,element){
        element.classList.add('movingLeft');
    })
    $('.rect8').each(function(index,element){
        element.classList.add('movingRight');
    })
}
function move5() {
    $('.rect9').each(function(index,element){
        element.classList.add('movingLeft');
    })
    $('.rect10').each(function(index,element){
        element.classList.add('movingRight');
    })
}
function move6() {
    $('.rect11').each(function(index,element){
        element.classList.add('movingLeft');
    })
    $('.rect12').each(function(index,element){
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
function come3() {   
    $('.rect5').each(function(index,element){
        element.classList.remove('movingLeft');
    })
    $('.rect6').each(function(index,element){
        element.classList.remove('movingRight');
    })
}
function come4() {   
    $('.rect7').each(function(index,element){
        element.classList.remove('movingLeft');
    })
    $('.rect8').each(function(index,element){
        element.classList.remove('movingRight');
    })
}
function come5() {   
    $('.rect9').each(function(index,element){
        element.classList.remove('movingLeft');
    })
    $('.rect10').each(function(index,element){
        element.classList.remove('movingRight');
    })
}
function come6() {   
    $('.rect11').each(function(index,element){
        element.classList.remove('movingLeft');
    })
    $('.rect12').each(function(index,element){
        element.classList.remove('movingRight');
    })
}


function expansion() {   
    $('.RB1').each(function(index,element){
        element.classList.add('fillbar');
    });
document.getElementsByClassName("RB1")[0].style.backgroundColor = "yellow";
}