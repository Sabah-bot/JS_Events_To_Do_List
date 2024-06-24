const textInput = document.querySelector("#todo-form");
const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const deletebutton = document.querySelector("#delete");



textInput.addEventListener("submit", (event)=> {
console.log(event);
event.preventDefault();
const newListItem = document.createElement('li');
newListItem.innerText = event.target['new-todo'].value;      
const deletebutton = document.createElement("button");
const buttonText = document.createTextNode("DELETE");
list.appendChild(newListItem);  
list.appendChild(deletebutton);
})

deletebutton.addEventListener("click",(event)=> {
    // newListItem = event.target['new-todo'].value;           
    list.removeChild(list.lastChild);  
  
})
