
const likesBtn = document.querySelector('.likes-btn');
const likesContaner = document.querySelector('.likes-container')
const hartContainer = document.querySelector('.hart-container')

likesBtn.addEventListener('click', e => {
	e.stopImmediatePropagation();
	// console.log('click')
	hartContainer.classList.toggle('hart')
	// likesContaner.after('<div class="hart-contaner"></div>')
	

	
	
})