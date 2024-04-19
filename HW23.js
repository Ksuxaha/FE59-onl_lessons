const main = document.body;


const container = document.createElement('div');
container.className = 'container';
main.append(container);

const main__contentUp = document.createElement(`div`);
main__contentUp.className = 'main__contentUp';
container.append(main__contentUp);

const main__contentUp__first = document.createElement(`div`);
main__contentUp__first.className = 'main__contentUp__first';
container.append(main__contentUp__first);




const main__contentUp__first__button = document.createElement('button');
main__contentUp__first__button.className = 'main__contentUp__first__button';
main__contentUp__first__button.textContent = "Delete All"
container.append(main__contentUp__first__button);


const main__contentUp__second__button = document.createElement('button');
main__contentUp__second__button.className = 'main__contentUp__first__button';
main__contentUp__second__button.textContent = " Delete Last"
container.append(main__contentUp__second__button);


const input = document.createElement(`input`);
input.className = 'input';
input.name = "ToDo";
input.placeholder = " Enter ToDo...";
container.append(input);


const main__contentUp__first__button__add = document.createElement(`button`);
main__contentUp__first__button__add.className = 'main__contentUp__first__button__add';
main__contentUp__first__button__add.textContent = "Add";
container.append(main__contentUp__first__button__add);


const main__contentUp__second = document.createElement(`div`);
main__contentUp__second.className = 'main__contentUp__second';
container.append(main__contentUp__second);

const SomeText1 = document.createElement(`span`);
SomeText1.className = 'SomeText1';
SomeText1.textContent = `All: 2`;
container.append(SomeText1);

const SomeText2 = document.createElement(`span`);
SomeText2.className = 'SomeText2';
SomeText2.textContent = `Completed: 1`;
container.append(SomeText2);


const main__contentUp__second__button1 = document.createElement('button');
main__contentUp__second__button1.className = 'main__contentUp__second__button1';
main__contentUp__second__button1.textContent = "Show ALL"
container.append(main__contentUp__second__button1);

const main__contentUp__second__button2 = document.createElement('button');
main__contentUp__second__button2.className = 'main__contentUp__second__button2';
main__contentUp__second__button2.textContent = "Show Completed"
container.append(main__contentUp__second__button2);

const main__contentUp__second__button__input = document.createElement(`input`);
main__contentUp__second__button__input.className = `main__contentUp__second__button__input`;
main__contentUp__second__button__input.placeholder = `Search...`
container.append(main__contentUp__second__button__input)

const main__contentDown = document.createElement(`div`);
main__contentDown.className = 'main__contentDown';
container.append(main__contentDown);

const main__contentDown__first = document.createElement(`div`);
main__contentDown__first.className = 'main__contentDown__first';
main__contentDown.append(main__contentDown__first);


const main__contentDown__first__SomeText = document.createElement(`div`);
main__contentDown__first__SomeText.className = 'main__contentDown__first__SomeText';
main__contentDown__first.append(main__contentDown__first__SomeText);



const input1 = document.createElement(`input`);
input1.type = 'checkbox';
input1.className = 'leftInput[type=checkbox]';
main__contentDown__first.append(input1)

const text = document.createElement(`div`);
text.className = 'text';
main__contentDown__first.append(text);


const DateText = document.createElement(`div`);
DateText.className = 'DateText';
DateText.textContent = `Date`
main__contentDown__first.append(DateText);


const input2 = document.createElement(`input`);
input2.type = 'checkbox';
input2.className = 'rightInput[type=checkbox]';
main__contentDown__first.append(input2)

//!!!!!!!!!!!!!!!!!!!!!!!
//
// const main__contentDown__second = document.createElement(`div`);
// main__contentDown__second.className = 'main__contentDown__second';
// main__contentDown__first.append(main__contentDown__second);