document.addEventListener("DOMContentLoaded", (e) => {
	function loadHeader() {
		let header_element = document.getElementById("header");
		let header_text = `
        <div class="title">
	<h1>Portfolio</h1>
</div>
<div class="social-links">
	<a href="#">Github</a>
	<a href="#">LinkedIn</a>
</div>`;
		header_element.innerHTML = header_text;
		return;
	}

	loadHeader();
});
