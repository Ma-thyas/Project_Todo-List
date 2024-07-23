import { myProjects as projectList, renderProject } from './addProject';
import { projectToStorage } from './storage';



const deleteProject = (e) => {
    let getProjectId = e.target.parentNode.getAttribute('id');
    console.log(getProjectId);
    let getPID = getProjectId.substring(1);
    console.log(getPID);

    projectList.splice(getPID,1);
    console.log(projectList);
    projectToStorage();
    console.log(projectList);
    renderProject();

}

export default deleteProject