const taskInput = document.getElementById("task-input")
const taskBtn = document.getElementById("task-btn")
let deleteBtns, checkBtns;

let tasks = []

updateTodoList()



taskBtn.addEventListener("click",() => {
    let taskText = taskInput.value
    if(taskText) {
        addTask(createTask(tasks.length +1 , taskText))
        updateTodoList()
        
    }
})

function updateTodoList(type = 'all') {

    tasks = getTasksFromLocalStorage()
    
    if(tasks.length > 0) {
        document.querySelector(".todo-list").innerHTML = ""
        tasks.forEach(task => {

            if(type==='all') {
                document.querySelector(".todo-list").appendChild(createTask(task.id, task.text, task.completed))
            } else if(type === 'completed' && task.completed) {
                document.querySelector(".todo-list").appendChild(createTask(task.id, task.text, task.completed))
            } else if(type === 'uncompleted' && !task.completed) {
                document.querySelector(".todo-list").appendChild(createTask(task.id, task.text, task.completed))
            }

        })
    } else {
        document.querySelector(".todo-list").innerHTML = ""
    }

    deleteBtns = document.querySelectorAll("button.delete");
        
    if(deleteBtns) {
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", () => {
                removeTask(deleteBtn.closest(".task").id)
            })
        })
    }

    checkBtns = document.querySelectorAll("button.check")

    if(checkBtns) {
        checkBtns.forEach(checkBtn => {
            checkBtn.addEventListener("click", function() {
                checkTask(checkBtn.closest('.task').id)
            })
        })
    }
}

function createTask(taskId, taskText, completed = false) {

    const listEl = document.createElement("li")
    listEl.classList.add("task")
    listEl.id = taskId
    
    if(completed) {
        listEl.classList.add("completed")
    }

    const para = document.createElement("p")
    para.innerText = taskText

    listEl.appendChild(para)

    const div = document.createElement("div")
    div.classList.add("buttons")

    const btnCheck = document.createElement("button")
    btnCheck.classList.add("check")
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>'

    const btnDelete = document.createElement("button")
    btnDelete.classList.add("delete")
    btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'


    div.appendChild(btnCheck)
    div.appendChild(btnDelete)

    listEl.appendChild(div)

    return listEl
}

function addTask(task) {

    taskObj = {
        id : tasks.length + 1,
        text: task.querySelector("p").innerText,
        completed: false
    }

    tasks.unshift(taskObj)

    addTasksToLocalStorage(tasks)
}


function addTasksToLocalStorage(tasks) {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("Tasks")) ?? []
}

function removeTask(taskId) {
    tasks = tasks.filter(function(item) {
        return item.id !== Number(taskId)
    })

    addTasksToLocalStorage(tasks)
    updateTodoList()
}


function checkTask(taskId) {

    const taskDiv = document.getElementById(taskId)

    taskDiv.classList.add("completed")

    tasks.forEach(task => {
        if(task.id == taskId) {
            task.completed = true
        }
    })

    addTasksToLocalStorage(tasks)
}


const filter = document.querySelector(".filter")
const filterList = document.querySelector("ul.filter-list")


filter.addEventListener("click", function() {
    filterList.classList.toggle("show")
})


filterList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', function() {
        filter.querySelector('.type').innerText = li.innerText
        updateTodoList(li.dataset.type)
    })
});