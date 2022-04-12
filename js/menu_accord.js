//Переключение языка (не стал делить все на отдельные файлы, так как мало кода)
$(".header_bottom__languages").click((e) => {
	$(".languages__list").toggleClass("active");
	$(".languages_icon").toggleClass("active");
});

$(".header_bottom__menu_item").click((e) => {
	$(".header_bottom_submenu__list").toggleClass("active");
	$(".header_bottom__menu_mark").toggleClass("active");	
});

//Основное меню

$(".languages").click((e) => {
	$(".languages__list").toggleClass("active");
	$(".languages_icon").toggleClass("active");
});

//Бургер меню
$("#mining_hotel").click((e) => {
	$("#mining_hotel__list1").toggleClass("active");
	//Если добавим еще всплывающее меню, то будут поворачиваться все треугольники...
	$(".burger_menu__item_mark").toggleClass("active");
});
//надо довести до ума
//
// const openItem = (item) => {
// 	const container = item.closest(".burger_submenu_list");
// 	container.addClass("active");
// };
//
// const closeEveryItem = (container) => {
// 	const items = container.find(".burger_submenu_list");
// 	items.removeClass("active");
// };
//
// $(".burger_menu_item").click((e) => {
// 	const $this = $(e.currentTarget);
// 	const container = $this.closest(".burger_menu_list");
// 	const elemContainer = $this.closest(".burger_menu_item");
//
// 	if (elemContainer.hasClass("active")) {
// 		closeEveryItem(container);
// 	} else {
// 		closeEveryItem(container);
// 		openItem($this);
// 	}
// });

