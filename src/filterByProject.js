import { myProjects as myP} from './addProject';
import { myTasks as taskList } from './addTask';
import { renderSpecific } from './printTask';

let filteredTask = [];


const filterTaskByProject = (e) => {
    let getProjectId = e.target.parentNode.getAttribute('id');
    let prjName = myP[getProjectId].title;

    filteredTask = taskList.filter((task) => task.project == prjName);
    renderSpecific(filteredTask); 
    
}
    

export default filterTaskByProject