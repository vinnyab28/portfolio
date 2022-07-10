const PAGE_DATA = {
	title: "G. Vineeth Prakash",
	subTitle: "UI/UX Developer",
	description:
		"Creative Front-End Developer offering 3+ years of experience providing high-impact web solutions for diverse industry organizations. Has an eye-for-detail to create robust web pages and increase the overall user experience. Enjoys working on CLI but love building creative and effective UI for better UX. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.",
};
const TYPING_SPEED = 10;

document.addEventListener("DOMContentLoaded", (e) => {
	let title_ele = document.getElementById("title");
	function typeTitle() {
		type_characters(
			title_ele,
			PAGE_DATA.title,
			TYPING_SPEED * 10,
			typeSubtitle
		);
	}
	typeTitle();

	let sub_title_ele = document.getElementById("sub_title");
	function typeSubtitle() {
		type_characters(
			sub_title_ele,
			PAGE_DATA.subTitle,
			TYPING_SPEED * 10,
			typeDescription
		);
	}

	let description_ele = document.getElementById("description");
	function typeDescription() {
		type_characters(description_ele, PAGE_DATA.description, TYPING_SPEED);
	}

	function type_characters(element, value, speed, callback = null) {
		let i = 0;
		const typing = setInterval(() => {
			if (i >= value.length) {
				if (callback && typeof callback === "function") callback();
				clearInterval(typing);
			}
			element.innerHTML += value.charAt(i);
			i++;
		}, speed);
	}

	let nav_buttons = document.querySelectorAll(".nav-button");
	nav_buttons.forEach((btn) => {
		btn.addEventListener("click", (event) => {
			let clicked_btn = event.target;
			let path = clicked_btn.getAttribute("data-url");
			window.location.href = path;
		});
	});
});
