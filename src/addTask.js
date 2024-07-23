import { Task } from './task';
import { render } from './printTask';
import { showAddBtn } from './editTask';
import { taskToStorage } from './storage';


const addTaskForm = document.querySelector('.add-popup');
const addForm = document.querySelector('.add-form');

const formTitle = document.querySelector('.form-title');
const formDescription = document.querySelector('.form-description');
const formDueDate = document.querySelector('.form-date');
const formProject = document.querySelector('#add-project');
const priorityHigh = document.querySelector('#high');
const priorityMedium = document.querySelector('#medium');
const priorityLow = document.querySelector('#low');


//open add form
const openTaskForm = () => {
    render();
    showAddBtn();
    deleteFormAnswer();
    addTaskForm.style.display = "block";
}

//close add form
const closeTaskForm = () => {
    addTaskForm.style.display = "none";
    // deleteFormAnswer();
}

//delete writing when closing form
const deleteFormAnswer = () => {
    addForm.reset();
}

//  define priority level
const priorityLevel = () => {
    let priority;
    if (priorityHigh.checked == true) {
        priority = 'high';
    } else if (priorityMedium.checked == true) {
        priority = 'medium';
    } else if (priorityLow.checked == true) {
        priority = 'low';
    }
    return priority;
}

//add Task to array
const addTaskToList = () => {
    let newTask = new Task (formTitle.value, formDescription.value, formDueDate.value, formProject.value, priorityLevel(), false);
    myTasks.push(newTask);
    taskToStorage();
    console.log(myTasks);
}

//
const addNewTask = (e) => {
    e.preventDefault();
    addTaskToList();
    render();
    closeTaskForm();
}

let myTasks = [];
let testTask = new Task("Respond email","send final answer to M. Smith",'2024-09-20','Work','high',false);

const addTestTask = () => {
    myTasks.push(testTask);
}
// let testTask = new Task("Respond email","send final answer to M. Smith",'2024-09-20','Work','high',false);
// myTasks.push(testTask);

addForm.addEventListener('submit', addNewTask);

export {openTaskForm, closeTaskForm, myTasks, addTestTask}
