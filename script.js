document.addEventListener("DOMContentLoaded", (e) => {
	function loadHeader() {
		let header_element = document.getElementById("header");
		let header_text = `
        <div class="title">
	<h1><a href="https://vinnyab28.github.io/portfolio" style="text-decoration: none">Portfolio</a></h1>
</div>
<div class="social-links">
	<a href="https://github.com/vinnyab28" target="_blank">Github</a>
	<a href="https://in.linkedin.com/in/vineeth-prakash" target="_blank">LinkedIn</a>
</div>`;
		header_element.innerHTML = header_text;
		return;
	}

	loadHeader();
});
