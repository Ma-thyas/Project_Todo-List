import { myProjects as myP, renderProject } from './addProject';



const deleteProject = (e) => {
    let getProjectId = e.target.parentNode.getAttribute('id');
    console.log(getProjectId);
    myP.splice(getProjectId,1);
    console.log(myP);
    renderProject();

}

export default deleteProject