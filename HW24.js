"use strict";
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const fullDate = `${day}.${month}.${year}`;


const addTaskButton = document.querySelector(`.actions__add`);
const  ulTodos = document.querySelector(`.todos`);

addTaskButton.addEventListener("click", () => {
    const createInput = document.querySelector(`.actions__create-field`)
    const inputText  = createInput.value;

    if (inputText) {
        const toDoItem = document.createElement(`li`);
        toDoItem.classList.add(`todo__item`);
            toDoItem.innerHTML = `
              <div class="todo__wrapper">
                <input  type="checkbox" class="todo__completed" />
                <div class="todo__text"> ${inputText}</div>
                <div class="todo__action">
                  <button onclick = ' deleteCard(event)'  class="todo__close btn btn_small btn_red"  >Х</button>
                  <span class="todo__date">${fullDate}</span>
                </div>
              </div>
`;
    ulTodos.append(toDoItem);
    createInput.value = ``;
        }
});


ulTodos.addEventListener('click', (event) => {
    const taskInputDone = event.target.parentElement.parentElement;

    if(taskInputDone.classList.contains('completed')){
        taskInputDone.classList.remove(`completed`)
    }else {
        taskInputDone.classList.add(`completed`)
    }


})


const deleteCard = function(event) {

    const currentTaskLi = event.target.parentElement.parentElement.parentElement;
    ulTodos.removeChild(currentTaskLi);
}

    ulTodos.addEventListener(`click` ,(event) =>{
        if (event.target.classList.contains('todo__close')) {
            deleteCard(event);
        }

    });


const deleteAllButton = document.querySelector(`.actions__delete-all`);
deleteAllButton.addEventListener('click', () => {
    ulTodos.innerHTML = '';
});


const deleteLastButton = document.querySelector(`.actions__delete-last`);
deleteLastButton.addEventListener(`click`, () => {
   const lastChild = ulTodos.lastChild;
    ulTodos.removeChild(lastChild);

})


