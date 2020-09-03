const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");

const toDos = JSON.parse(localStorage.getItem("list_toDos")) || [];

function renderToDos() {
  listElement.innerHTML = "";

  for (toDo of toDos) {
    let toDoElement = document.createElement("li");
    let toDoText = document.createTextNode(toDo);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    let pos = toDos.indexOf(toDo);
    linkElement.setAttribute("onclick", "deleteToDo(" + pos + ")");

    let linkText = document.createTextNode(" Delete");

    linkElement.appendChild(linkText);

    toDoElement.appendChild(toDoText);
    toDoElement.appendChild(linkElement);

    listElement.appendChild(toDoElement);
  }
}

renderToDos();

function addToDo() {
  const toDoText = inputElement.value;

  toDos.push(toDoText);
  inputElement.value = "";
  renderToDos();
  saveToStorage();

  inputElement.value = "";
  inputElement.focus();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
  toDos.splice(pos, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_toDos", JSON.stringify(toDos));
}