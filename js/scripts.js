 // Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const canceldoneBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

 // Funções
const saveTodo = (text) => {
const todo = document.createElement("div");
todo.classList.add("todo");

const todoTitle = document.createElement("h3");
todoTitle.innerText = text;
todo.appendChild(todoTitle);

console.log(todo);

const doneBtn = document.createElement("button")
doneBtn.classList.add("finish-todo")
doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
todo.appendChild(doneBtn)

const editBtn = document.createElement("button")
editBtn.classList.add("edit-todo")
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
todo.appendChild(editBtn)

const deleteBtn = document.createElement("button")
deleteBtn.classList.add("remove-todo")
deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
todo.appendChild(deleteBtn)

todoList.appendChild(todo);

todoInput.value="";
todoInput.focus();

};

const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

 // Eventos
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    //console.log("Enviou form");

    const inputValue = todoInput.value;     

    if (inputValue){ 
        console.log(inputValue);
        //Save todo
        saveTodo(inputValue)    
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parenteEl = targetEl.closest("div");
    let todoTitle;
    if (parenteEl && parenteEl.querySelector("h3")) {
        todoTitle = parenteEl.querySelector("h3").innerText;
    }
    if (targetEl.classList.contains("finish-todo")) {
    console.log("clicou para finalizar");
    parenteEl.classList.toggle("done");
    /*Se colocar o add no lugar do toggle, o botão só servirá para colocar a tarefa como completo. Agora o toggle além de completar a tarefa e deixa a tarefa normal.*/ 
}
    if (targetEl.classList.contains("remove-todo")) {
        parenteEl.remove();
    }
    
    if (targetEl.classList.contains("edit-todo")) {
        console.log("Editou");
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue.value = todoTitle;
    }
});

canceldoneBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    toggleForms();
})

