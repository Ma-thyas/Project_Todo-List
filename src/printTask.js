import { myTasks as taskList } from './addTask';
import editIcon from './img/pencil.svg';
import deleteIcon from './img/delete.svg';
import deleteTask from './deleteTask';
import editTask from './editTask';
import taskDone from './checkTask';
import { format, parseISO } from "date-fns";


const taskContent = document.querySelector('.task-content');

const render = () => {
    taskContent.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        createNewEntry(taskList[i]);
    }
};

const renderSpecific = (array) => {
    taskContent.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        createNewEntry(array[i]);
    }
};

const createNewEntry = (task) => {
    //main task div
    const taskModel = document.createElement('div');
    taskModel.classList.add('task-model');
    taskModel.setAttribute('id', taskList.indexOf(task));

    //checkbox div
    const checkBox = document.createElement('div');
    checkBox.classList.add('checkbox');

    const checkBoxInput = document.createElement('input');
    checkBoxInput.setAttribute('type','checkbox');
    checkBoxInput.setAttribute('name','isChecked');
    checkBoxInput.classList.add('completed-task');
    checkBoxInput.addEventListener('change', taskDone)

    if (task.checkStatus == true) {
        checkBoxInput.checked = true;
        taskModel.style.textDecoration = 'line-through';
    }

    checkBox.appendChild(checkBoxInput);
   
    //text div
    const taskText = document.createElement('div');
    taskText.classList.add('task-text');

    const taskTitle = document.createElement('h4');
    const taskDescription = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskDescription.classList.add('task-description');
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;

    taskText.appendChild(taskTitle);
    taskText.appendChild(taskDescription);

    //date div
    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    if (task.dueDate == '') {
        taskDate.textContent = "";
     } else {
        taskDate.textContent = formatDateForTask(task.dueDate);
     }
     //project div
     const taskProject = document.createElement('div');
     taskProject.classList.add('task-project');
     if (task.project == "none") {
        taskProject.textContent = "";
     } else {
        taskProject.textContent = formatProjectForTask(task.project);
     }

     //priority
     if (task.priority == 'high') {
        taskModel.style.borderLeft = "5px solid red"
    } else if (task.priority == 'medium') {
        taskModel.style.borderLeft = "5px solid orange"
    } else if (task.priority == 'low') {
        taskModel.style.borderLeft = "5px solid green"
    }
    
     // icon div 
     const taskIconDiv = document.createElement('div');
     taskIconDiv.classList.add('task-icon');

     //edit btn
     const taskEdit = new Image();
     taskEdit.src = editIcon;
     taskEdit.classList.add('task-img', 'icon-edit');
     taskEdit.setAttribute('alt','edit icon');
     taskEdit.addEventListener('click', editTask);

     //delete btn
     const taskDelete = new Image();
     taskDelete.src = deleteIcon;
     taskDelete.classList.add('task-img', 'icon-delete');
     taskDelete.setAttribute('alt','delete icon');
     taskDelete.addEventListener('click', deleteTask);

     taskIconDiv.appendChild(taskEdit);
     taskIconDiv.appendChild(taskDelete)

    // append
    taskModel.appendChild(checkBox);
    taskModel.appendChild(taskText);
    taskModel.appendChild(taskDate);
    taskModel.appendChild(taskProject);
    taskModel.appendChild(taskIconDiv);

    taskContent.appendChild(taskModel);
}

//format date
const formatDateForTask = (date) => {
    let ISODate = parseISO(date);
    // let dataFormated = ((date.getDate()) + "/" + ((date.getMonth() + 1)) + "/" + (date.getFullYear()));
    let dataFormated = format(new Date(ISODate), "dd/MM/yyyy");
    return dataFormated;
}

//format project
const formatProjectForTask = (project) => {
   return '# ' + project;
}


export {formatDateForTask, render, renderSpecific}