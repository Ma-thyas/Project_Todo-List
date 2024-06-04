import { myTasks as taskList } from './addTask';
import { isFuture, parseISO } from "date-fns";
import { renderSpecific } from './printTask';

const taskContent = document.querySelector('.task-content');
let filteredTask = [];

const applyFutureFilter = (task) => {
    let ISODueDate = parseISO(task.dueDate);
    let future = isFuture(ISODueDate);
    if (future == true) {
            return task;   
        } 
}

const filterFutureTask = () => {
    filteredTask = taskList.filter(applyFutureFilter);
    renderSpecific(filteredTask); 
}
    

export default filterFutureTask