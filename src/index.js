import _ from 'lodash';
import './style.css';
import {openTaskForm, closeTaskForm } from './task'

const addTaskBtn = document.querySelector('.add-task');
const cancelBtn = document.querySelector('.cancel-btn');





// const openTask = () => {
//     addTaskForm.style.display = "block";
// }

addTaskBtn.addEventListener('click', openTaskForm);
cancelBtn.addEventListener('click', closeTaskForm);