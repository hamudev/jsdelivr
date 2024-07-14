	const carouselItems = document.querySelectorAll('.carousel-focus');

	carouselItems.forEach((item) => {
		item.addEventListener('mouseover', () => {
			item.parentNode.style.animationPlayState = 'paused';
		});

		item.addEventListener('mouseout', () => {
			item.parentNode.style.animationPlayState = 'running';
		});

		item.addEventListener('touchstart', () => {
			item.parentNode.style.animationPlayState = 'paused';
		});

		item.addEventListener('touchend', () => {
			item.parentNode.style.animationPlayState = 'running';
		});
	});
