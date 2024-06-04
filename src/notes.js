

const taskContent = document.querySelector('.task-content');

class Note {
    constructor(title,content) {
        this.title = title
        this.content = content
    }
}

const showNotes = () => {
    taskContent.innerHTML = "";
    console.log(myNotes);
    createNotesGrid();
    
}

const createNotesGrid = () => {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid');
    gridBox.style.display = "grid";

    for (let i = 0; i < myNotes.length; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridBox.appendChild(gridElement);
    }

    taskContent.appendChild(gridBox);
}

let myNotes = [];

let testNote1 = new Note("Emails","Marie \n Marc \n Francis");
let testNote2 = new Note("To buy","Bread \n Cheese \n Water");
let testNote3 = new Note("Sunday","Brunch with Alice and Antoine");
myNotes.push(testNote1);
myNotes.push(testNote2);
myNotes.push(testNote3);

export default showNotes
