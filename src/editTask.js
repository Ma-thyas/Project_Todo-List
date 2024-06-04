import { get } from 'lodash';
import { myTasks as taskList, openTaskForm } from './addTask';
import { render } from './printTask';

const formTitle = document.querySelector('.form-title');
const formDescription = document.querySelector('.form-description');
const formDueDate = document.querySelector('.form-date');
const formProject = document.querySelector('#add-project');
const priorityHigh = document.querySelector('#high');
const priorityMedium = document.querySelector('#medium');
const priorityLow = document.querySelector('#low');

const addForm = document.querySelector('.add-form');

// let editMode = false;

//open task with correct infos
const editTask = (e) => {
    let getAtt = e.target.parentNode.parentNode.getAttribute('id');
    console.log(getAtt);
    openTaskForm();
    fillFormContent(getAtt)

}

const fillFormContent = (att) => {
    formTitle.value = taskList[att].title;
    formDescription.value = taskList[att].description;
    formDueDate.value = taskList[att].dueDate;
    formProject.value = taskList[att].project;
    if (taskList[att].priority == 'high') {
        priorityHigh.checked = true;
    } else if (taskList[att].priority == 'medium') {
        priorityMedium.checked = true;
    } else if (taskList[att].priority == 'low') {
        priorityLow.checked = true;
    }
    console.log(taskList[att]);

}

//modify submit btn

// const editSubBtn = () => {
//     addForm.classList.add('edit-form');
//     addForm.classList.remove('add-form');

// }

export default editTask