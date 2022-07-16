
let randomNum;
let lang;

const newArrey = [];
const img = document.querySelector('img')
const quote = document.querySelector('.quote');
const btnsLang = document.querySelector('.btns__lang');

function getRandomNum(max) {
   randomNum = Math.floor(Math.random() * max);
}
getRandomNum(100);

const setBg = () => {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.querySelector('.content').style.color = "#" + randomColor;
}

btnsLang.onclick = getLangClass;
function getLangClass(event) {
	lang = event.path[0].classList[1]
	if(event.target.classList.contains('ru') && quote.classList.contains('eng')) {
		quote.classList.remove('eng')
		quote.classList.add('ru')
		quote.textContent = 'Я знаю много цитат'
		document.querySelector('.cancel').textContent = 'Отмена'
		document.querySelector('.ru').textContent = 'Рус'
		document.querySelector('.eng').textContent = 'анг'
		// I know a lot of quotes
	} else if(event.target.classList.contains('eng') && quote.classList.contains('ru')) {
		quote.classList.remove('ru')
		quote.classList.add('eng')
		quote.textContent = 'I know a lot of quotes'
		document.querySelector('.cancel').textContent = 'Cancel'
		document.querySelector('.ru').textContent = 'ru'
		document.querySelector('.eng').textContent = 'eng'


	}
	getQuotes(lang, randomNum)
}
lang = quote.classList[2];

async function getQuotes(lang, randomNum) {
	const quotes = `quotes${lang}.json`;
	const res = await fetch(quotes);
	const data = await res.json();
	document.querySelector('.content').innerHTML = `${data[randomNum].text}`
   document.querySelector('.author').innerHTML = `"${data[randomNum].author}"`
}
	getQuotes(lang, randomNum)	

function toggleClassImg() {
	img.style.animationName = 'my-animation';
	function deleteAnim() {
		img.style.animationName = 'none'
	}
	setTimeout(deleteAnim, 500);
}
function takeCancel () {
	toggleClassImg()
	document.querySelector('.content').innerHTML = ''
   document.querySelector('.author').innerHTML = ''
}
document.querySelector('.quote').onclick = function induceFuncs() {
	getRandomNum(100);
	setBg();
	getQuotes(lang, randomNum)	;
	toggleClassImg();
}
document.querySelector('.cancel').onclick = takeCancel;



