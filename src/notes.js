import endProject from './img/close.svg';
import deleteNote from './deleteNote';
import { closeTaskForm } from './addTask';
import { noteToStorage, storageToNote } from './storage';

const taskContent = document.querySelector('.task-content');
const gridBox = document.createElement('div');

class Note {
    constructor(title,content) {
        this.title = title
        this.content = content
    }
}

const createGrid = () => {
    closeTaskForm();
    gridBox.classList.add('grid');
    taskContent.appendChild(gridBox);
}


const createGridElement = (note) => {
    //create grid element
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.setAttribute('id', myNotes.indexOf(note));

    const deleteNoteIcon = new Image();
    deleteNoteIcon.src = endProject;
    deleteNoteIcon.classList.add('delete-note');
    deleteNoteIcon.setAttribute('alt','delete note icon');
    deleteNoteIcon.addEventListener('click', deleteNote);

    const noteTitle = document.createElement('h3');
    noteTitle.classList.add('note-title');
    noteTitle.setAttribute('contenteditable','true');
    noteTitle.textContent = note.title;
    noteTitle.addEventListener('focusout', modifyTitle);

    const noteContent = document.createElement('p');
    noteContent.classList.add('note-content');
    noteContent.setAttribute('contenteditable','true');
    noteContent.textContent = note.content;
    noteContent.addEventListener('focusout', modifyContent);

    gridElement.appendChild(deleteNoteIcon);
    gridElement.appendChild(noteTitle);
    gridElement.appendChild(noteContent)
    gridBox.appendChild(gridElement);

}

const printGridAtStart = () => {
    // taskContent.innerHTML = "";
    gridBox.innerHTML = "";

    createGrid();
    storageToNote();
    
    if (myNotes.length == 0) {
        addTestNote()    
    }

    for (let i = 0; i < myNotes.length; i++) {
        createGridElement(myNotes[i]);
    }
    console.log(myNotes);
}

const printGrid = () => {
    taskContent.innerHTML = "";
    gridBox.innerHTML = "";
    gridBox.style.display = 'grid';
    createGrid();
    
    for (let i = 0; i < myNotes.length; i++) {
        createGridElement(myNotes[i]);
    }
    console.log(myNotes);
}

const addNewNote = () => {
    let newNote = new Note();
    myNotes.push(newNote);
    createGridElement(newNote);
}

const modifyTitle = (e) => {
    let getNoteId = e.target.parentNode.getAttribute('id');
    let newTitleValue = e.target.textContent;
    console.log(newTitleValue);
    myNotes[getNoteId].title = newTitleValue;
    console.log(myNotes);
    noteToStorage();

}

const modifyContent = (e) => {
    let getNoteId = e.target.parentNode.getAttribute('id');
    let newContentValue = e.target.textContent;
    console.log(newContentValue);
    myNotes[getNoteId].content = newContentValue;
    console.log(myNotes);
    noteToStorage();

}


let myNotes = [];

const addTestNote = () => {
    let testNote1 = new Note("Emails","Marie \nMarc \nFrancis");
    let testNote2 = new Note("To buy","Bread \nCheese \nWater");
    let testNote3 = new Note("Sunday","Brunch with Alice and Antoine");
    let testNote4 = new Note("Holidays","Call back the  guide");
    myNotes.push(testNote1);
    myNotes.push(testNote2);
    myNotes.push(testNote3);
    myNotes.push(testNote4);
}


export { printGrid, printGridAtStart, addNewNote, myNotes, Note }