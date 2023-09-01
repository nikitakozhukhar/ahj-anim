const chatButton = document.querySelector('.chat-button');
const closeBtn = document.querySelector('.close-btn');
const chatContainer = document.querySelector('.chat-container')

chatButton.addEventListener('click', e => {
	e.stopImmediatePropagation();
	
	chatButton.classList.toggle('chat-button-hide');
	chatContainer.classList.add('chat-container-show')
})

closeBtn.addEventListener('click', e => {
	chatContainer.classList.remove('chat-container-show');
	chatButton.classList.remove('chat-button-hide');
})

