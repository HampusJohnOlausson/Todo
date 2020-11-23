//------------Selectors-------------
const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const todoList = document.querySelector('.todoList');

//------------Event Listeners------------
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);


/**
 * function for adding todos to list
 * @param {*} event 
 */
function addTodo(event){


    //stops from refreshing
    event.preventDefault();

    //Creating a new container 
    const todoContainer = document.createElement('div');
    //Adds styling from class 
    todoContainer.classList.add('todoContainer');

    //new paragraph inside of the todoContainer
    const newTodo = document.createElement('p');
    newTodo.classList.add('paragraph');

    //innertext of the new todo
    newTodo.innerHTML = input.value;

    //appending the paragraph in inside the container
    todoContainer.appendChild(newTodo);

    //add todo to local storage
    saveToLocalStorage(input.value);

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('deleteBtn');
    todoContainer.appendChild(deleteBtn);

    //----appedning to the list-----
    todoList.appendChild(todoContainer);

    //clearing input when adding new todo
    input.value = '';
}
 /**
  * delete todo
  * @param {*} e 
  */
 function deleteTodo(e){

    const item = e.target;

    //delete todo
    if(item.classList[0] === 'deleteBtn'){

        const todo = item.parentElement;

        //removing item from list in the browser
        todo.remove();
        // remove from Local storage
        deleteFromLocalStorage(todo);
        
    }

 }

/**
 * Save todo to Local storage
 * @param {*} todo 
 */
function saveToLocalStorage(){

    //Checking storage for todos
    let todo; 
    //if its empty, create an empty array for the new todo
    if(localStorage.getItem('todo') === null){
        todos = [];
    }
    //if its NOT empty, we will get back an old array from the local storage with old items or todos
     else{
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * getting todos from local storage
 * @param {*} todo 
 */
function getTodos(){
    //Checking storage for todos
    let todo; 
    //if its empty, create an empty array for the new todo
    if(localStorage.getItem('todo') === null){
        todos = [];
    }
    //if its NOT empty, we will get back an old array from the local storage with old items or todos
     else{
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    todos.forEach(function(todo){

        const todoContainer = document.createElement('div');
        todoContainer.classList.add('paragraph');
        const newTodo = document.createElement('p');
        newTodo.innerText = todo;
        newTodo.classList.add('paragraph');
        todoContainer.appendChild(newTodo);
    })

    


}

/**
 * delete todo from Local storage
 * @param {*} todo 
 */
function deleteFromLocalStorage(todo){
    
    let todos;

    if(localStorage.getItem('todo') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    //targeting the index of the item
    const todoIndex = todo.children[0].innerText;
    /**
     * Removing: two arguments
     * 1st 'todoIndex': from what position you want to remove
     * 2st '1': how many elements you want to remove
     */
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));

}




