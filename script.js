const body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');
// console.log(e.target)

for (var btn of buttons) {
	btn.addEventListener('click', (e) => {
		document.querySelector('.active').classList.remove('active');
	  e.target.classList.add('active');
	  
		let dataColor = e.target.getAttribute('data-color').split(' '),
			root = document.querySelector(':root');
		root.style.setProperty('--theme', dataColor[0]);
	})
}