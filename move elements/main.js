const color = document.getElementById('color');
const createBtn = document.getElementById('create-btn');
const list = document.getElementById("list");



document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        e.target.parentNode.remove();
    }
});


createBtn.onclick = () => {
    createNote(list, color.value);
}


function createNote(list , color) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<span class="close">x</span>
                <textarea placeholder="Your text..." rows="10" cols="30"></textarea>`;
    note.style.borderColor = color;

    let close = note.querySelector('.close');

    if (isDarkColor(color)) {
        close.style.color = "#fff";
    }

    list.appendChild(note);
}


function isDarkColor(color) {

    var color = color.substring(1); 
    var rgb = parseInt(color, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    return luma < 40
}


let note = {
    el: null,
    x: null,
    y: null
}

let cursor = {
    x: null,
    y: null
}


document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('note')) {
        cursor = {
            x: e.clientX,
            y: e.clientY
        }

        note = {
          dom: e.target,
          x: e.target.getBoundingClientRect().left,
          y: e.target.getBoundingClientRect().top
        };
    }
});



document.addEventListener('mousemove', (e) => {
    if (note.dom == null) return;

    let currentCursor = {
        x: e.clientX,
        y: e.clientY
    }

    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }

    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
});


document.addEventListener('mouseup', () => {
    note.dom = null;
});