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


const isChecked = function (checkbox) {
    const parent = checkbox.parentElement.parentElement;


    if (checkbox.checked) {
        parent.classList.add(`completed`);
    };
        console.log(`Why???`)
        parent.classList.add(`todo__completed`);

};


const deleteCard = function(event) {

    const currentTaskLi = event.target.parentElement.parentElement.parentElement;
    ulTodos.removeChild(currentTaskLi);
}

    ulTodos.addEventListener(`click` ,(event) =>{
        if (event.target.classList.contains('todo__close')) {
            deleteCard(event);
        }

    });



ulTodos.addEventListener('click', (event) => {

    if (event.target.classList.contains('todo__close')) {
        deleteCard(event);
    }

    else if (event.target.classList.contains('todo__completed')) {
        isChecked(event.target);
    }
});



const deleteAllButton = document.querySelector(`.actions__delete-all`);
deleteAllButton.addEventListener('click', () => {
    ulTodos.innerHTML = '';
});

const deleteLastButton = document.querySelector(`.actions__delete-last`);
deleteLastButton.addEventListener(`click`, () => {
   const lastChild = ulTodos.lastChild;
    console.log(lastChild)
    ulTodos.removeChild(lastChild);

})


