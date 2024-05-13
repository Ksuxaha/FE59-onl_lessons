
"use strict";
// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const day = currentDate.getDate();
// const fullDate = `${day}.${month}.${year}`;
const createInput = document.querySelector(`.actions__create-field`)
const addTaskButton = document.querySelector(`.actions__add`);
const deleteLastButton = document.querySelector(`.actions__delete-last`);
const deleteAllButton = document.querySelector(`.actions__delete-all`);
const  ulTodos = document.querySelector(`.todos`);

let  uniqueIdItem = 1;

const createToDoItem = () => {
    const inputText  = createInput.value;

    if (inputText) {
        const toDoItem = document.createElement(`li`);
        toDoItem.classList.add(`todo__item`);
        toDoItem.id = `todo-item-${uniqueIdItem}`;
        const fullDate = new Date().toLocaleString();

        toDoItem.innerHTML = `
              <div class="todo__wrapper">
                <input  type="checkbox" class="todo__completed" id="todo-completed-${uniqueIdItem} />
                <div class="todo__text"> ${inputText}</div>
                <div class="todo__action">
                  <button class="todo__close btn btn_small btn_red" id="todo-delete-${uniqueIdItem}"  >Х</button>
                  <span class="todo__date">${fullDate}</span>
                </div>
              </div>
`;
        ulTodos.append(toDoItem);

        const todo = {
            id: `todo-item-${uniqueIdItem}`,
            text: inputText,
            date,
            isChecked: false,

        };

        const data = localStorage.getItem(`todos`);

        if (!data) {
            localStorage.setItem('todos', JSON.stringify([todo]));
        } else {
            const result = JSON.parse(data);
            result.push(todo);

            localStorage.setItem('todos', JSON.stringify(result));
        }
        createInput.value = "";
        ++uniqueIdItem;
    }

};

addTaskButton.addEventListener("click", createToDoItem);

const makeToDoCompleted = ('click', (event) => {
    // const taskInputDone = event.target.parentElement.parentElement;
    const id =  event.target.id;
    const liId = `todo-item-${id.split('-').at(-1)}`;
    const currentLi = ulTodos.querySelector(`#${liId}`);
    currentLi.classList.toggle('todo__item_completed')

    // if(taskInputDone.classList.contains('completed')){
    //     taskInputDone.classList.remove(`completed`)
    // }else {
    //     taskInputDone.classList.add(`completed`)
    // }


})


const deleteCard = function(event) {
    const id = event.target.id;
    const liId = `todo-item-${id.split('-').at(-1)}`;
    const currentLi = ulTodos.querySelector(`#${liId}`);
    ulTodos.removeChild(currentLi);
}

ulTodos.addEventListener(`click`,(event) => {
    if (event.target.classList.contains('todo__close')) {
        deleteCard();
        }
        if (event.target.classList.contains("todo__completed")) {
            makeToDoCompleted(event);
        }

});


deleteAllButton.addEventListener('click', () => {
    ulTodos.innerHTML = '';
});


deleteLastButton.addEventListener(`click`, () => {
    const lastChild = ulTodos.lastChild;
    ulTodos.removeChild(lastChild);

})


