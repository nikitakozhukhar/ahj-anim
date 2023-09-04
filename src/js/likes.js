
const likesBtn = document.querySelector('.likes-btn');
const likesContaner = document.querySelector('.likes-container')

likesBtn.addEventListener('click', e => {
	e.stopImmediatePropagation();
	const heart = document.createElement('div');
	heart.className = 'heart';
	
	heart.style.animationName = `heart-fly${Math.floor(Math.random() * 4 + 1)}`;
	likesContaner.appendChild(heart);
	heart.addEventListener('animationend', () => {
		likesContaner.removeChild(heart);
	})
})
