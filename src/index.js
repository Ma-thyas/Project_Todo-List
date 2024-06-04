import _, { add } from 'lodash';
import './style.css';
import {openTaskForm, closeTaskForm } from './addTask';
import {render} from './printTask';
import filterTodayTask from './todayTask';
import filterFutureTask from './upcomingTask';
import { showProjectForm,closeProjectForm, renderProject} from './addProject';
import showNotes from './notes';


const addTaskBtn = document.querySelector('.add-task');
const cancelBtn = document.querySelector('.cancel-btn');
const homeBtn = document.querySelector('.home-screen');
const todayFilter = document.querySelector('.today');
const upcomingFilter = document.querySelector('.futur');
const addProjectForm = document.querySelector('.add-project');
const notesScreen = document.querySelector('.notes');


const cancelProjectBtn = document.querySelector('.cancel-project-btn');

document.addEventListener('DOMContentLoaded',render);
document.addEventListener('DOMContentLoaded',renderProject);

addTaskBtn.addEventListener('click', openTaskForm);
cancelBtn.addEventListener('click', closeTaskForm);
homeBtn.addEventListener('click', render);
todayFilter.addEventListener('click', filterTodayTask);
upcomingFilter.addEventListener('click', filterFutureTask);
addProjectForm.addEventListener('click', showProjectForm);
cancelProjectBtn.addEventListener('click', closeProjectForm);
cancelProjectBtn.addEventListener('click', closeProjectForm);
notesScreen.addEventListener('click', showNotes);


