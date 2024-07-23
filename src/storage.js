import { myTasks as taskList } from './addTask';
import { myProjects as projectList, Project} from './addProject';
import { myNotes as noteList, Note } from './notes';
import { Task } from './task';

//task storage
const taskToStorage = () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('todolist',JSON.stringify(taskList));
    }
}

const storageToTask = () => {
    let toDoList = localStorage.getItem('todolist');
    let myT = JSON.parse(toDoList);

    for (let i = 0; i < myT.length; i++) {
        taskList.push(Object.assign(new Task(), myT[i]));
    }
 
}

//project storage
const projectToStorage = () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('projectlist',JSON.stringify(projectList));
    }
}

const storageToProject = () => {
    let myProjectList = localStorage.getItem('projectlist');
    let myP = JSON.parse(myProjectList);

    for (let i = 0; i < myP.length; i++) {
        projectList.push(Object.assign(new Project(), myP[i]));
    }
 
}


//note storage
const noteToStorage = () => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('notelist',JSON.stringify(noteList));
    }
}

const storageToNote = () => {
    let myNoteList = localStorage.getItem('notelist');
    let myN = JSON.parse(myNoteList);

    for (let i = 0; i < myN.length; i++) {
        noteList.push(Object.assign(new Note(), myN[i]));
    }
 
}

export {taskToStorage, storageToTask, projectToStorage, storageToProject, noteToStorage, storageToNote} 