const toDoForm = document.querySelector("#todo-form");
const textInput = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");
const dateButton = document.querySelector("#show-date")
const dateTime = document.querySelector("#date-time");

// MVP: `Enter` button +`delete` button + allows a user to delete an item from the list 

textInput.addEventListener("input", (event) => {
    console.log(event);
}); 

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target["new-todo"].value);
    const newListItem = document.createElement("li");
    const newDeleteButton = document.createElement("button");
    const buttonText = document.createTextNode("DELETE");
    newListItem.innerText = event.target["new-todo"].value;
    newDeleteButton.appendChild(buttonText);
    toDoList.appendChild(newListItem);
    newListItem.appendChild(newDeleteButton);

    newDeleteButton.addEventListener("click", () => {
        newListItem.remove();
    });
});


// MVP: Create a `Show Date` button +added directly to `index.html`. (hint: `Date()` returns today's date and time) 

dateButton.addEventListener("click", () => {
    const currentDateTime = new Date();
    dateTime.innerText = currentDateTime; 
})
    

// Extensions -- attempted (does not work!)

    // newListItem.addEventListener("click", () => {
    //     newListItem.classList.toggle("completed");
    

    // });




