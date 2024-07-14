	let currentIndex = 6; // Start from the checked radio button
	const totalSlides = 11; // Total number of slides
	const intervalTime = 2000; // Time interval in milliseconds
  
	setInterval(() => {
	  currentIndex = (currentIndex % totalSlides) + 1; // Cycle through the slides
	  document.getElementById('s' + currentIndex).checked = true;
	}, intervalTime);
