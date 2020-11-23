
const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const todoList = document.querySelector('.todoList');

addBtn.addEventListener('click', addTodo);

/**
 * Adding new todo
 */
function addTodo(){

    //Creating a new container 
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');
    todoList.appendChild(todoContainer);

    //creating new todo
    const newTodo = document.createElement('p');
    todoContainer.appendChild(newTodo);
    newTodo.classList.add('paragraph');
    newTodo.innerHTML = input.value;

    //creating delete todo
    const deleteBtn = document.createElement('button');
    todoContainer.appendChild(deleteBtn);
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.classList.add('deleteBtn');

    //clearing input when adding new todo
    input.value = '';

    deleteBtn.addEventListener('click', deleteTodo);

    /**
     * deleting todo 
     */
    function deleteTodo() {
    todoContainer.remove(todoList);
    }

}


