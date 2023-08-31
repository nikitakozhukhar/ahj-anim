const chatButton = document.querySelector('.chat-button');

chatButton.addEventListener('click', e => {
	e.stopImmediatePropagation();
	
	chatButton.classList.toggle('chat-button-hide')
})