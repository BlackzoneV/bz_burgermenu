$(document).ready(function() {
	window.addEventListener('message', function(event){
		if (event.data.action == 'open') {
			openBurgerMenu();
		}
	});
});

$(document).on('click', '.danamenu', function(e) {
	e.preventDefault();

	$('.burgershot-giris').css({"display":"none"});
	$('.tavukburger').css({"display":"none"});
	$('.danaburger').css({"display":"block"});
});

$(document).on('click', '.tavukmenu', function(e) {
	e.preventDefault();

	$('.burgershot-giris').css({"display":"none"});
	$('.tavukburger').css({"display":"block"});
	$('.danaburger').css({"display":"none"});
});

$(document).on('click', '#geridon', function(e) {
	e.preventDefault();
	$('.burgershot-giris').css({"display":"block"});
	$('.tavukburger').css({"display":"none"});
	$('.danaburger').css({"display":"none"});
});

$(document).on('keydown', function(event) {
	switch(event.keyCode) {
		case 27:
		closeBurgerMenu();
		break;
	}
});

openBurgerMenu = function() {
	$('.burgershot-giris').css({"display":"block"});
	$('.tavukburger').css({"display":"none"});
	$('.danaburger').css({"display":"none"});
}

closeBurgerMenu = function() {
	$.post('https://bz_burgermenu/close', JSON.stringify({}));
	$('.burgershot-giris').css({"display":"none"});
	$('.tavukburger').css({"display":"none"});
	$('.danaburger').css({"display":"none"});
}