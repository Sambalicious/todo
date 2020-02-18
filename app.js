class Todo{
    constructor(name, time, category){
        this.name = name;
        this.time= time;
        this.category = category
    }
}

class UI{
    static displayTodo(){


       const StoredTodos= []
        const todos = StoredTodos;

        todos.forEach((todo) => UI.addTodo(todo));
    }

    static addTodo(todo){
        const list = document.querySelector('#todo-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${todo.name}</td>
        <td>${todo.time}</td>
        <td>${todo.category}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteTodo(el){
        if (el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    };


        static clearFields(){
            document.querySelector('#name').value ='';
            document.querySelector('#time').value ='';
            document.querySelector('#category').value ='';
       

    }

}




document.addEventListener('DOMContentLoaded', UI.displayTodo);

document.querySelector('#todo-form').addEventListener('submit', (e)=> {
    e.preventDefault();
    const name= document.querySelector('#name').value;
    const time= document.querySelector('#time').value;
    const category= document.querySelector('#category').value;

    const todo = new Todo(name, time, category);
    

    UI.addTodo(todo);

    UI.clearFields();
});


//  delete Todo 
document.querySelector('#todo-list').addEventListener('click', (e)=> {
    UI.deleteTodo(e.target);
})

