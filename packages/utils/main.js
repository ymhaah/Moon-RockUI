import { setSpecialThings, changeAttribute, rand } from "./functions.js";

console.log(`Made with Love by Youssef Hafnawy`);
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
function toggle(Butt1, Class1, Butt2, Class2) {
	Butt1.classList.toggle(Class1);
	Butt2.classList.toggle(Class2);
}
function reAdd(Butt1, Class1, Butt2, Class2) {
	// Butt1 => remove , Butt2 => add
	Butt1.classList.remove(Class1);
	Butt2.classList.add(Class2);
}

////////////////////////////////////////////////////////////////////////
// for the phone nav list function
let navListButton = document.querySelector(".mobile-nav-toggle");
let phoneNavList = document.querySelector(".main-navigation ul");

let notNavListButton = [...document.querySelectorAll("body > *:not(header)")];
let visible = phoneNavList.getAttribute("date-visible");
let pageSections = [...document.querySelectorAll("main section")];

let specialForScroll = "";
// console.log(pageSections);

// a function to open and close the phone navigation when clicking on the icon(Menu icon, [X]icon)
navListButton.onclick = function () {
	if (visible === "false") {
		phoneNavList.setAttribute("date-visible", true);
		navListButton.setAttribute("aria-expanded", true);
		visible = "true";
		// gsap.to('ul[date-visible="true"]', {
		// 	duration: 0.5,
		// 	xPercent: -100,
		// });
	} else if (visible === "true") {
		phoneNavList.setAttribute("date-visible", false);
		navListButton.setAttribute("aria-expanded", false);
		visible = "false";
		// gsap.to('ul[date-visible="false"]', {
		// 	duration: 0.5,
		// 	xPercent: 0,
		// });
	}
};
// a function to close the phone navigation when clicking Anything outside the navigation list
notNavListButton.forEach((ele) => {
	ele.onclick = function () {
		if (visible === "true") {
			phoneNavList.setAttribute("date-visible", false);
			navListButton.setAttribute("aria-expanded", false);
			visible = "false";
			gsap.to('ul[date-visible="false"]', {
				duration: 0.5,
				xPercent: 0,
			});
		}
	};
});
// a function to close the phone navigation on scroll
window.onscroll = function () {
	if (visible === "true") {
		phoneNavList.setAttribute("date-visible", false);
		navListButton.setAttribute("aria-expanded", false);
		visible = "false";
		gsap.to('ul[date-visible="false"]', {
			duration: 0.5,
			xPercent: 0,
		});
	}
};

// a function To determine the active nav item

let navEle = [...document.querySelectorAll(".main-navigation ul li a")];
let mainNavSpecialEle = "";

navEle.forEach(function (ele) {
	ele.onclick = function () {
		mainNavSpecialEle = ele;
		for (let i = 0; i < navEle.length; i++) {
			if (navEle[i] == mainNavSpecialEle) {
				navEle[i].setAttribute("date-selected", true);
			} else if (navEle[i] != mainNavSpecialEle) {
				navEle[i].setAttribute("date-selected", false);
			}
		}
	};
});
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// scroll to top button
let scrollTop = document.querySelector(".scroll-Top");
scrollTop.onclick = function () {
	window.scrollTo(0, 0);
};

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////

// let imges = [...document.querySelectorAll("img")];

// /* Adding the attribute loading="lazy" to all images on the page. */
// imges.forEach((element) => {
// 	element.setAttribute("loading", "lazy");

// 	if (
// 		!element.hasAttribute("alt") ||
// 		element.getAttribute("alt") == "" ||
// 		element.getAttribute("alt") == null
// 	) {
// 		element.setAttribute("alt", "good image");
// 	}
// });

////////////////////////////////////////////////////////////////////////
//observer
////////////////////////////////////////////////////////////////////////

// let aboutUs = document.querySelector(".about");
// let turnBrowne = document.querySelector(".blue-shoes");

// let options = {
// 	root: null,
// 	threshold: 0,
// 	rootMargin: "",
// };

// let observer = new IntersectionObserver(function (entries, observer) {
// 	entries.forEach(function (entry) {
// 		if (entry.isIntersecting) {
// 			turnBrowne.classList.add("turn-browne");
// 		} else {
// 			turnBrowne.classList.remove("turn-browne");
// 		}
// 	});
// }, options);

// observer.observe(aboutUs);
////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////

// let lines = [...document.querySelectorAll(".line")];
// let content = [...document.querySelectorAll(".artc")];
// let special = "";

// lines.forEach(function (ele) {
// 	ele.onclick = function () {
// 		special = ele;
// 		for (let i = 0; i < lines.length; i++) {
// 			if (lines[i] == special) {
// 				lines[i].classList.add("act");
// 				content[i].classList.add("vis");
// 			} else if (lines[i] != special) {
// 				lines[i].classList.remove("act");
// 				content[i].classList.remove("vis");
// 			}
// 		}
// 	};
// });
