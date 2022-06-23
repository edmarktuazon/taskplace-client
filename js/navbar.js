/** @format */

const hamburgerMenu = document.querySelector("#hamburger-icon");
const menuList = document.querySelector("#menu-list");
const container = document.querySelector("body");

function dropDown() {
	const dropDownMenus = document.querySelector(".dropdown__menus");
	dropDownMenus.classList.toggle("link-drop");
	const rotateIcon = document.querySelector(".fa-angle-down");
	rotateIcon.classList.toggle("trigger");
}

hamburgerMenu.addEventListener("click", () => {
	if (menuList.className.includes("show")) {
		menuList.classList.remove("show");
		if (container.className.includes("change-bg")) {
			container.classList.remove("change-bg");
		}
	} else {
		menuList.classList.add("show");
		container.classList.add("change-bg");
	}
});
