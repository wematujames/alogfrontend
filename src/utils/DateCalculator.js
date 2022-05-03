class DateCalucator {
	constructor(date) {
		return this.shortDate(date);
	}

	shortDate(date) {
		return String(new Date(date)).substring(0, 21);
	}
}

export default DateCalucator;
