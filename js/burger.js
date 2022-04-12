// const fullscreenButton = document.querySelector(".burger_cross__plank");
// const fullscreenMenu = document.querySelector(".burger_menu");
// const fullscreenMenuWrapper = document.querySelector(".burger_menu__wrapper");
//
// fullscreenButton.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	fullscreenButton.classList.toggle("burger_cross__plank.active");
// 	fullscreenMenu.classList.toggle("burger_menu.active");
// 	fullscreenMenuWrapper.classList.toggle("burger_menu__wrapper.active");
// 	$("body").toggleClass("lock");
// });

$(document).ready(function(){
	$(".burger_cross").click(function(event) {
		$(".burger_cross__plank, .burger_menu, .burger_menu__wrapper").toggleClass("active");
	})
});
$(".burger_menu__languages").click((e) => {
	$(".languages__list").toggleClass("active");
	$(".languages_icon").toggleClass("active");
});

