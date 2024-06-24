const textInput = document.querySelector("#todo-form");
const button = document.querySelector("#enter");


button.addEventListener("click", () => {
    console.log("button clicked");
});

// textInput.addEventListener("input", (event) => {
//     textOutput.innerText = event.target.value; 
//  });


button.addEventListener("click", (event)=> {
event.preventDefault();
const newListItem = document.createElement("li");
newListItem.innerText = event.target["new-todo"].value;           
toDolist.appendChild(newListItem);  
})