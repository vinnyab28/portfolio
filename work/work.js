document.addEventListener("DOMContentLoaded", (e) => {
	let experience_groups = document.getElementsByClassName("experience-group");

	for (let i = 0; i < experience_groups.length; i++) {
		let item = experience_groups.item(i);
		let bottom_of_item = item.getBoundingClientRect().top + item.clientHeight / 2;
		let bottom_of_window = document.documentElement.clientWidth;

		if (bottom_of_item > bottom_of_window) {
			item.classList.add("hidden");
		}
	}

	window.addEventListener("scroll", () => {
		let hidden_items = document.getElementsByClassName("hidden");
		for (let i = 0; i < hidden_items.length; i++) {
			let item = hidden_items.item(i);
			let bottom_of_item = item.getBoundingClientRect().top + 20;
			let bottom_of_window = document.documentElement.clientHeight;
			if (bottom_of_window > bottom_of_item) {
				item.classList.remove("hidden");
			}
		}
	});
});
