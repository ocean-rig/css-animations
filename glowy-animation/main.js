let cards = document.getElementsByClassName('card');
document.getElementById('cards').onmousemove = e => {
	for (const card of cards) {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		card.style.setProperty('--mouse-x', `${x}px`);
		card.style.setProperty('--mouse-y', `${y}px`);
	}
}