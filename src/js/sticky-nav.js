let scrollY = window.scrollY;

const introHeight = document.querySelector("#intro").offsetHeight;
const navigation = document.querySelector("#navigation");

window.addEventListener("scroll", () => {
	const scrolled = window.scrollY;

	if (scrolled >= introHeight) {
		navigation.classList.add("navigation--sticky");
	} else {
		navigation.classList.remove("navigation--sticky");
	}
});
