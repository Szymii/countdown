export const getTimeLeft = (date) => {
	const difference = Math.floor(Math.abs(new Date() - date));
	const time = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	};

	if (difference > 0) {
		time.days = Math.floor(difference / (1000 * 60 * 60 * 24));
		time.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		time.minutes = Math.floor((difference / 1000 / 60) % 60);
		time.seconds = Math.floor((difference / 1000) % 60);
	}

	return time;
};
