import endProject from './img/close.svg';
import deleteProject from './deleteProject';
import filterTaskByProject from './filterByProject';

const projectForm = document.querySelector('.project-popup');
const projectFrom = document.querySelector('.project-form');
const projectTitle = document.querySelector('.project-title-input');
const projects = document.querySelector('.projects');
const projectList = document.querySelector('.project-list');
const options = document.getElementById('add-project');

class Project {
    constructor(title) {
        this.title = title
    }
}

// show project form
const showProjectForm = () => {
    resetProjectForm();
    projectForm.style.display = "block";
}

// close project form
const closeProjectForm = () => {
    projectForm.style.display = "none";
}

//reset form
const resetProjectForm = () => {
    projectFrom.reset();
}

let myProjects = [];

// add new project to array
const addProjectToList = () => {
    let newProject = new Project (projectTitle.value);
    myProjects.push(newProject);
}

// create new project in nav
const addProjectToNav = (project) => {
    const newProject = document.createElement('li');
    newProject.classList.add('project')
    newProject.setAttribute('id', myProjects.indexOf(project));

    const projectName = document.createElement('p');
    projectName.classList.add('project-name')
    projectName.textContent = project.title;
    projectName.addEventListener('click', filterTaskByProject);

    const deleteProjectIcon = new Image();
    deleteProjectIcon.src = endProject;
    deleteProjectIcon.classList.add('delete-project');
    deleteProjectIcon.setAttribute('alt','delete project icon');
    deleteProjectIcon.addEventListener('click', deleteProject);

    newProject.appendChild(projectName)
    newProject.appendChild(deleteProjectIcon)
    projectList.appendChild(newProject)
    
   
}

// show projects in nav
const renderProject = () => {
    projectList.innerHTML = "";
    options.innerHTML = "";
    addNoneOption();
    for (let i = 0; i < myProjects.length; i++) {
        addProjectToNav(myProjects[i]);
        addProjectToForm(myProjects[i]);
    }
};

//show project in form
const addProjectToForm = (project) => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', project.title);
    newOption.textContent = project.title;

    options.appendChild(newOption);

}

//add None project option
const addNoneOption = () => {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', 'none');
    newOption.textContent = 'None';

    options.appendChild(newOption);
}

// add project to nav and to project choice
const addProject = (e) => {
    e.preventDefault();
    addProjectToList();
    renderProject();
    closeProjectForm();
}

let testProject = new Project("Work");
myProjects.push(testProject);

projectFrom.addEventListener('submit', addProject);



export {showProjectForm, closeProjectForm, myProjects, renderProject}