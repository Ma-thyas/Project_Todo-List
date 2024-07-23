import { myTasks as taskList } from './addTask';
import { render } from './printTask';
import { taskToStorage } from './storage';


const deleteTask = (e) => {
    let getAtt = e.target.parentNode.parentNode.getAttribute('id');
    console.log(getAtt);
    taskList.splice(getAtt,1);
    console.log(taskList);
    taskToStorage();
    render();

}

export default deleteTask