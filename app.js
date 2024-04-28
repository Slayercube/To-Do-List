// Your code here
const inputField = document.querySelector('#addToDo')
const todoList = document.querySelector('ul')

function additems(){

    const taskText = inputField.value.trim()

    if ( taskText !== ""){

        const newElement = document.createElement('li')
        newElement.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskText}`
        todoList.appendChild(newElement)
        inputField.value = ""
    }

}

function deleteTask (event){
    const taskToDo = event.target
    if (taskToDo.classList.contains("fa-trash")){
        const endTask = taskToDo.parentElement.parentElement
        todoList.removeChild(endTask);
    }


}
inputField.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter' )
     additems()
})
todoList.addEventListener('click', deleteTask);