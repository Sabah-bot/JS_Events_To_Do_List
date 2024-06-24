const textInput = document.querySelector("#todo-form");
const userInput = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const deletebutton = document.querySelector("#delete");
const dateButton = document.querySelector("#show-date")


// `Enter` button +`delete` button + allows a user to delete an item from the list 
textInput.addEventListener("submit", (event)=> {
console.log(event);
event.preventDefault();
const newListItem = document.createElement('li');
const deletebutton = document.createElement("button");
const buttonText = document.createElement("DELETE");
newListItem.innerText = event.target['new-todo'].value;      
deletebutton.appendChild(buttonText);

list.appendChild(newListItem);  
list.appendChild(deletebutton);

deletebutton.addEventListener("click",(event)=> {
    list.removeChild(list.lastChild); 
});

});


// Create a `Show Date` button +added directly to `index.html`. (hint: `Date()` returns today's date and time) 

// dateButton.addEventListener("click", () => {

// })

