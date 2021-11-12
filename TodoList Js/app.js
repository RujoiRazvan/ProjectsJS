'use strict';

const text = document.querySelector(".inputField input");
const addBtn = document.querySelector(".btnInsert");
const htmlList = document.querySelector(".ToDoList");
const checkBox = document.querySelector(".checked");
const deleteAllBtn = document.querySelector(".deleteAll");

var dataAttribute = htmlList.getAttribute('data-key');
const size = document.querySelector(".text");

let todoList = [];

const todo = {
    id: Date.now(),
    name: "buy milk",
    completed: false
};

renderTheList(todoList);
function addTodo(item){
    if(item !== '' && item!==' '){
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };
        todoList.push(todo);
        addToLocalStorage(todoList);
        
        text.value = "";
    }
}

function renderTheList(todoList){
    htmlList.innerHTML = '';
    size.textContent = "You have " + todoList.length + " tasks";
    todoList.forEach(function(item){
        const li = document.createElement('li');
  
        li.setAttribute('class', 'item');

        li.setAttribute('data-key', item.id);

        li.innerHTML = ` <input type="checkbox" class="checked"> ${(item.name)} <button class="delete-button">X</button>`;
       
        htmlList.append(li);
    })
}

function addToLocalStorage(todoList){
    localStorage.setItem('ToDoList', JSON.stringify(todoList));
    
    renderTheList(todoList);
}

function getFromLocalStorage(){
    const reference = localStorage.getItem('ToDoList');
    if(reference){
        todoList = JSON.parse(reference);
        renderTheList(todoList);
    }
}
getFromLocalStorage();

function deleteTodo(id) {
  
    todoList = todoList.filter(function(item) {

        return item.id != id;
    });

    addToLocalStorage(todoList);
  }
  getFromLocalStorage();

  htmlList.addEventListener('click', function(event) {

    console.log(event.target.getAttribute('data-key'));
    if(event.target.classList.contains('delete-button'))
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
      });

deleteAllBtn.addEventListener('click', function(){
    localStorage.clear();
    todoList = [];
    renderTheList(localStorage);
});

addBtn.addEventListener('click', function(){
    addTodo(text.value);
});