const faqItem = document.querySelectorAll('.faq__item'),
	faqDrop = document.querySelectorAll('.faq__drop'),
	faqPlass = document.querySelectorAll('.faq__plass'),
	anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	animationTime = 300,
	framesCount = 20;
function simpleAccordionNonAutoClosing(trigger, list, anim) {
	for (let i = 0; i < trigger.length; i++) {
		trigger[i].addEventListener("click", function () {
			if (anim[i].classList.contains('active')) {
				anim[i].classList.remove('active')
				list[i].style.height = '0';
			} else {
				anim[i].classList.add('active')
				list[i].style.height = list[i].scrollHeight + 'px';
			}
		});
	};
};
simpleAccordionNonAutoClosing(faqItem, faqDrop, faqPlass)
anchors.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
		let scroller = setInterval(function () {
			let scrollBy = coordY / framesCount;
			if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
				window.scrollBy(0, scrollBy);
			} else if (coordY > 0) {
				window.scrollTo(0, coordY - 110);
				clearInterval(scroller);
			}
			else {
				window.scrollTo(0, coordY);
				clearInterval(scroller);
			}
		}, animationTime / framesCount);
	});
});
