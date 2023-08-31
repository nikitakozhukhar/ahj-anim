const collapse = document.querySelector('.collapse');
// const collapseble = document.querySelector('.collapseble')
const text = document.querySelector('.collapseble');
const container = document.querySelector('.container')

collapse.addEventListener('click', e => {
	e.stopImmediatePropagation();
	
	container.classList.toggle('show')
})