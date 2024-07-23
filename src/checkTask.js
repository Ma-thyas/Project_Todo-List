import { myTasks as taskList} from './addTask';
import { taskToStorage } from './storage';



const taskDone = (e) => {
    let getAtt = e.target.parentNode.parentNode.getAttribute('id');
    if (taskList[getAtt].checkStatus == true) { 
        taskList[getAtt].checkStatus = false;
        let getTask = document.getElementById(getAtt);
        getTask.style.textDecoration = 'none';
    } else {
        taskList[getAtt].checkStatus = true;
        let getTask = document.getElementById(getAtt);
        getTask.style.textDecoration = 'line-through';
    }

    taskToStorage();   
}




export default taskDone