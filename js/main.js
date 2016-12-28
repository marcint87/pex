window.sr = ScrollReveal().reveal(' .text-section-heading, .text-section-text, .text-section-text-small, .about-heading, .about-text, .about-text-small', {duration: 1100, scale: 0.3});

sr.reveal('.text-block', {distance: "50em"},50);

var menu =  document.getElementById("menu");
var btn = document.getElementById("button");
btn.addEventListener("click", function(e) {
	if (menu.classList == "menu-list") {
		 menu.className += " active";
		 btn.className += " menu-active";
	}
	else {
		menu.className = "menu-list";
		btn.className = "menu-wrapper";
	}
});