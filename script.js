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

const changeAttribute = (textContent, classAdd, classRemove) => {
	mainTitle.textContent = `Tema ${textContent}`;
	toggleIcon.children[0].textContent = textContent;
	toggleIcon.children[1].classList.replace(
		`fa-${classRemove}`,
		`fa-${classAdd}`
	);
};

/* tema dark */
const darkMode = () => {
	nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
	changeAttribute('Dark', 'moon', 'sun');
	imgMode('dark');
};

/* tema light */
const lightMode = () => {
	nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
	textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	changeAttribute('Light', 'sun', 'moon');
	imgMode('dark');
};

const switchTheme = (event) => {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		darkMode();
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		lightMode();
	}
};

/* Event Listener*/
toggleSwitch.addEventListener('change', switchTheme);
