const toggleSwitch = document.querySelector('input[type="checkbox"');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const mainTitle = document.getElementById('main-title');

const imgMode = (mode) => {
	image1.src = `img/proud_coder_${mode}.svg`;
	image2.src = `img/portfolio_${mode}.svg`;
	image3.src = `img/verified_${mode}.svg`;
};

const toggleDarkLightMode = (theme) => {
	nav.style.backgroundColor =
		theme === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
	textBox.style.backgroundColor =
		theme === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
	mainTitle.textContent = theme === 'dark' ? 'Tema Dark' : 'Tema Light';
	toggleIcon.children[0].textContent = theme === 'dark' ? 'Dark' : 'Light';
	const remove = theme === 'dark' ? 'sun' : 'moon';
	const add = theme === 'dark' ? 'moon' : 'sun';
	toggleIcon.children[1].classList.replace(`fa-${remove}`, `fa-${add}`);
	theme === 'dark' ? imgMode('dark') : imgMode('light');
};

const switchTheme = (event) => {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		toggleDarkLightMode('dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		toggleDarkLightMode('light');
	}
};

/* Event Listener*/
toggleSwitch.addEventListener('change', switchTheme);

/* Verifica se já tem o tema armazenado */
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		toggleDarkLightMode('dark');
	}
}
