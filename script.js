var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem('list_toDos')) || [];

function renderToDos() {
	listElement.innerHTML = '';
	
	for (toDo of toDos) {
		var toDoElement = document.createElement('li');
		var toDoText = document.createTextNode(toDo);
		
		var linkElement = document.createElement('a');
		
		linkElement.setAttribute('href', '#');
		
		var pos = toDos.indexOf(toDo);
		linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');
		
		var linkText = document.createTextNode(' Delete');

		linkElement.appendChild(linkText);
		
		toDoElement.appendChild(toDoText);
		toDoElement.appendChild(linkElement);
		
		listElement.appendChild(toDoElement);
	}
}

renderToDos();

function addToDo() {
	var toDoText = inputElement.value;
	
	toDos.push(toDoText);
	inputElement.value = '';
	renderToDos();
	saveToStorage();

	inputElement.value = '';
	inputElement.focus();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
	toDos.splice(pos, 1);
	renderToDos();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem('list_toDos', JSON.stringify(toDos));
}