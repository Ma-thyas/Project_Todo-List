import editIcon from './img/pencil.svg';
import deleteIcon from './img/delete.svg';


const addTaskForm = document.querySelector('.add-popup');
const content = document.querySelector('.content');
const addForm = document.querySelector('.add-form');

const formTitle = document.querySelector('.form-title');
const formDescription = document.querySelector('.form-description');
const formDueDate = document.querySelector('.form-date');
const formProject = document.querySelector('#add-project');

// let myTask = [];

class Task {
    constructor(title, description, dueDate, project, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.project = project
        this.priority = priority
    }


    addNewTask() {
        let task = new Task (title.value, description.value, dueDate.value, project.value, priority.checked);
        // myTask.push(task); 
        console.log(task);
        
    }

    showTask() {
        // content.innerHTML = "";
        // for (let i = 0; i < myTask.length; i++) {
        //     createNewEntry(myTask[i]);
        // }
        createNewEntry(this.addNewTask);
    }
  
    
}

const addTask = (e) => {
    e.preventDefault();
    
    createNewEntry();
    
   
    closeTaskForm();
}



addForm.addEventListener('submit', addTask);


const openTaskForm = () => {
    addTaskForm.style.display = "block";
}

const closeTaskForm = () => {
    addTaskForm.style.display = "none";
    deleteFormAnswer();
}

const deleteFormAnswer = () => {
    formTitle.value = "";
    formDescription.value = "";
    formDueDate.value = "";
    formProject.value = "none";
}

//DOM creation of a new task
const createNewEntry = () => {
    //main task div
    const taskModel = document.createElement('div');
    taskModel.classList.add('task-model');

    //checkbox div
    const checkBox = document.createElement('div');
    checkBox.classList.add('checkbox');

    const checkBoxInput = document.createElement('input');
    checkBoxInput.setAttribute('type','checkbox');
    checkBoxInput.setAttribute('name','isChecked');
    checkBoxInput.setAttribute('value','');

    checkBox.appendChild(checkBoxInput);
   
    //text div
    const taskText = document.createElement('div');
    taskText.classList.add('task-text');

    const taskTitle = document.createElement('h4');
    const taskDescription = document.createElement('p');
    taskTitle.classList.add('task-title');
    taskDescription.classList.add('task-description');
    taskTitle.textContent = formTitle.value;
    taskDescription.textContent = formDescription.value;

    taskText.appendChild(taskTitle);
    taskText.appendChild(taskDescription);

    //date div
    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = formDueDate.value;

     //project div
     const taskProject = document.createElement('div');
     taskProject.classList.add('task-project');
     if (formProject.value == "none") {
        taskProject.textContent = "";
     } else {
        taskProject.textContent = '#' + formProject.value;
     }
  
     // icon div 
     const taskIconDiv = document.createElement('div');
     taskIconDiv.classList.add('task-icon');

     //edit btn
     
     const taskEdit = new Image();
     taskEdit.src = editIcon;
     taskEdit.classList.add('task-img', 'icon-edit');
     taskEdit.setAttribute('alt','edit icon');

     //delete btn
    
     const taskDelete = new Image();
     taskDelete.src = deleteIcon;
     taskDelete.classList.add('task-img');
     taskDelete.setAttribute('alt','delete icon');

     taskIconDiv.appendChild(taskEdit);
     taskIconDiv.appendChild(taskDelete)

    // append
    taskModel.appendChild(checkBox);
    taskModel.appendChild(taskText);
    taskModel.appendChild(taskDate);
    taskModel.appendChild(taskProject);
    taskModel.appendChild(taskIconDiv);

    content.appendChild(taskModel);
}



export {openTaskForm, closeTaskForm}