import { myTasks as taskList } from './addTask';
import { isToday, parseISO } from "date-fns";
import { renderSpecific } from './printTask';

const taskContent = document.querySelector('.task-content');
let filteredTask = [];

const applyTodayFilter = (task) => {
    let ISODueDate = parseISO(task.dueDate);
    let today = isToday(ISODueDate);
    if (today == true) {
            return task;   
        } 
}

const filterTodayTask = () => {
    filteredTask = taskList.filter(applyTodayFilter);
    renderSpecific(filteredTask); 
}
    

export default filterTodayTask
