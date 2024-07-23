import { get } from 'lodash';
import { myTasks as taskList, openTaskForm, closeTaskForm, addTaskToList } from './addTask';
import { render } from './printTask';
import { taskToStorage } from './storage';


const formTitle = document.querySelector('.form-title');
const formDescription = document.querySelector('.form-description');
const formDueDate = document.querySelector('.form-date');
const formProject = document.querySelector('#add-project');
const priorityHigh = document.querySelector('#high');
const priorityMedium = document.querySelector('#medium');
const priorityLow = document.querySelector('#low');

const addBtn = document.querySelector('.add-btn');

const formButtons = document.querySelector('.add-form-btn');
let getAtt;

//open task with correct infos
const openEditForm = (e) => {
    getAtt = e.target.parentNode.parentNode.getAttribute('id');
    console.log(getAtt);
    openTaskForm();
    addEditBtn();
    hideAddBtn();
    fillFormContent(getAtt);
}

const editTask = (e) => {
    modifyTask(getAtt);
    taskToStorage();
    closeEditForm();
    
}

const fillFormContent = (id) => {

    console.log(taskList[id]);
    formTitle.value = taskList[id].title;
    formDescription.value = taskList[id].description;
    formDueDate.value = taskList[id].dueDate;
    formProject.value = taskList[id].project;
    if (taskList[id].priority == 'high') {
        priorityHigh.checked = true;
    } else if (taskList[id].priority == 'medium') {
        priorityMedium.checked = true;
    } else if (taskList[id].priority == 'low') {
        priorityLow.checked = true;
    }
}


const modifyTask = () => {
    let newFormTitle = formTitle.value;
    taskList[getAtt].title = newFormTitle;

    let newFormDescription = formDescription.value;
    taskList[getAtt].description = newFormDescription;

    let newFormDueDate = formDueDate.value;
    taskList[getAtt].dueDate = newFormDueDate;
    
    let newFormProject = formProject.value;
    taskList[getAtt].project = newFormProject;

    let newFormPriority;
    if (priorityHigh.checked == true) {
        newFormPriority = 'high';
    } else if (priorityMedium.checked == true) {
        newFormPriority = 'medium';
    } else if (priorityLow.checked == true) {
        newFormPriority = 'low';
    }
    taskList[getAtt].priority = newFormPriority;
}


//modify submit btn
const editBtn = document.createElement('button');

const addEditBtn = () => {
    editBtn.textContent = 'Confirm';
    editBtn.setAttribute('type','button');
    editBtn.classList.add('task-btn', 'edit-btn');
    editBtn.style.display = 'block';

    formButtons.prepend(editBtn);
}

const hideAddBtn = () => {
  addBtn.style.display = 'none';
}

const showAddBtn = () => {
    addBtn.style.display = 'block';
    editBtn.style.display = 'none';
  }


const closeEditForm = () => {
    render();
    closeTaskForm();
    showAddBtn();
    
}

editBtn.addEventListener('click', editTask)

export { editTask, openEditForm, showAddBtn, closeEditForm }