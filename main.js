//-----------Selectors-----------
const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const list =  document.querySelector('.todoList');

//---------Event Listener---------
addBtn.addEventListener('click', addTodo);

//----------Functions-----------
function addTodo(e){

    //Stops browser from refreshing
    e.preventDefault();

    //Create div in list, create li in div
    const todoDiv = document.createElement('div');
    const newTodo = document.createElement('li');
    //style div and li
    todoDiv.classList.add('todoDiv');
    newTodo.classList.add('li');
    //user input is the value of the todo
    newTodo.innerHTML = input.value;
    //appending div to list and li to div
    
    todoDiv.appendChild(newTodo);
    list.appendChild(todoDiv);

    //clearing input when added to list
    input.value = '';

    //save todo to local storage
    saveToLocalStorage(newTodo.innerHTML);

    //--------Delete button--------
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('deleteBtn');
    todoDiv.appendChild(deleteBtn);
    //call delete function
    deleteTodo(deleteBtn, todoDiv);
}
//delete todo
function deleteTodo(deleteBtn, todoDiv){

    deleteBtn.addEventListener('click', () => {
        //removing the todo
        todoDiv.remove();
        //calling function to remove todo from local storage
        removeLocalStorage(todoDiv);
    });

}
/**
 *-------Local Storage--------
 * @param {*} newtodo 
 * save to local storage
 */
function saveToLocalStorage(newtodo){

    //Checking storage for todos
    let todos;

    //if its empty it will create an empty array for the new todo
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    //if its NOT empty, it will give back an old array from local storage with the old todos
     else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    //pushing the todo into the array
    todos.push(newtodo);
    //saving the todo to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

//remove from local storage
function removeLocalStorage(todoDiv){

    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    //targeting the index of the item.
    const todoIndex = todoDiv.children[0].innerText;
    /**
     * Removing: two arguments.
     * 1st 'todoIndex' from what position do you want to remove element from?
     * 2st '1' how many elements you want to remove
     */
    todos.splice(todos.indexOf(todoIndex), 1);
    //saving changes in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}
