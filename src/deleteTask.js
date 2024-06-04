import { myTasks as taskList } from './addTask';
import { render } from './printTask';


const deleteTask = (e) => {
    let getAtt = e.target.parentNode.parentNode.getAttribute('id');
    console.log(getAtt);
    taskList.splice(getAtt,1);
    console.log(taskList);
    render();

}

export default deleteTask