const textInput = document.querySelector("#todo-form");
const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const deletebutton = document.querySelector("#delete");



textInput.addEventListener("submit", (event)=> {
console.log(event);
event.preventDefault();
const newListItem = document.createElement('li');
newListItem.innerText = event.target['new-todo'].value;           
list.appendChild(newListItem);  
})

deletebutton.addEventListener("click",(event)=> {
    // newListItem = event.target['new-todo'].value;           
    list.removeChild(lastChild);  
  
})
