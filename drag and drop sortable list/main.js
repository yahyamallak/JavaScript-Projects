const textInput = document.getElementById('text-input')
const submitBtn = document.getElementById('submit-btn')
const ulList = document.querySelector("ul.list")
let lis;
let listElements = []

getList()
showList()
getLis()
startDrag()

submitBtn.onclick = function() {

    const text = textInput.value

    if(text) {
        addElement(text)
        textInput.value = ''
        showList()
        setPositions()
        storeList()
        getLis()
        startDrag()
    }
}

function addElement(text) {
    listElements.push(text)
}

function addToList(list) {
    ulList.appendChild(list)
}


function getLis() {
    lis = document.querySelectorAll('ul.list li')
}


function createList(text) {

    const list = document.createElement('li')
    list.classList.add('el')
    list.draggable = true
    list.innerHTML = "<i class='fa-solid fa-bars'></i>"

    const paragraph = document.createElement('p')
    paragraph.innerText = text

    list.appendChild(paragraph)

    return list
}


function showList() {
    ulList.innerHTML = '';

    if(listElements) {
        listElements.forEach(element => {
            addToList(createList(element))
        })
    }
}


function storeList() {
    localStorage.setItem("list", JSON.stringify(listElements));
}

function getList() {
    data = JSON.parse(localStorage.getItem("list")) 
    if(data) {
        listElements = data
    }
}


function startDrag() {

    let draggedEl, position, dragOver;

    lis.forEach(li => {
        li.addEventListener("dragstart",function(e) {
            draggedEl = li; 
        });

        li.addEventListener("dragover", function(e) {

            dragOver = li;

            if(li !== draggedEl) {
                position = (li.offsetTop + li.clientHeight / 2) > e.clientY ? 'before' : 'after'
            }

        })

        li.addEventListener("dragend", function(e) {
            if(position == 'before') {
                ulList.insertBefore(draggedEl, dragOver)
            }

            if(position == 'after') {
                dragOver.after(draggedEl)
            }

            sortElements()
            storeList()
        })
    });
    
}


function sortElements() {
    const els = document.querySelectorAll(".el")

    listElements = []
    listElements.length = 0

    els.forEach(el => {
        listElements.push(el.querySelector("p").innerText)
    })
}