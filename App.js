//selctors
const todoInput = document.querySelector('.todo-input');  
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//EVENT LISTNERS 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// FUNCTION
function addTodo(event){
    //prevent from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    //add class name
    todoDiv.classList.add("todo");
    // Create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    //Add text to the html tag 
   newTodo.innerText = todoInput.value;
    // Take the list inside the tododiv(div)
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerText = "add"
    todoDiv.appendChild(completedButton);
    completedButton.classList.add("complete-btn")
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerText =  "Delete";
    todoDiv.appendChild(trashButton);
    trashButton.classList.add("trash-btn")
    //append to list
    todoList.appendChild(todoDiv);
    //clear to do input value
    todoInput.value = "";
};
function deleteCheck(e){
    // grab what we are clicking on
    const item = e.target;
    console.log(item.classList[0])
    //delete todo
     if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation  
        todo.classList.add("fall")
        todo.addEventListener('transitioned', function(){
         todo.remove();
        })
        
     }
     //check mark
     if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
     };
};
function filterTodo(e){
   const todos = todoList.childNodes;
   //console.log(todos);
   todos.forEach(function(todo){
      switch(e.target.value){
         case "all":
            todo.style.display = "flex";
            break;
         case "completed":
            if(todo.classList.contains("completed")){
               todo.style.display = "flex";
            } else {
               todo.style.display = "none";
            }
      }
   })
}