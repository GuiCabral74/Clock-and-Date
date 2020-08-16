//Make a date in html

const myData = document.querySelector('.data');

dayName = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');

monName = new Array(
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Agosto',
	'Outubro',
	'Novembro',
	'Dezembro'
);

now = new Date();

myData.innerHTML =
	'<h1> Hoje é ' +
	dayName[now.getDay()] +
	', ' +
	now.getDate() +
	' de ' +
	monName[now.getMonth()] +
	' de ' +
	now.getFullYear() +
	'. </h1>';

// MAKE A HOUR IN HTML

const myHour = document.querySelector('.hora');

function time() {
	today = new Date();
	h = today.getHours();
	m = today.getMinutes();
	s = today.getSeconds();
	myHour.innerHTML = h + ':' + m + ':' + s;
	setTimeout('time()', 500);
}

//MAKE INFO

const bloco = document.querySelector('.bloco');
const container2 = document.querySelector('.container2');
const newDiv = document.createElement('div');

newDiv.classList.add('info');
newDiv.innerText = "Escolha uma cor para a fonte";
newDiv.style.color = "white";
bloco.insertBefore(newDiv, container2);
