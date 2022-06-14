
import UserInteractionController from './userInteractionController.js';
import UserInteractionModel from './userInteractionModel.js';
import UserInteractionView from './userInteractionView.js';

let newUserInteractionModel = new UserInteractionModel();
let newUserInteractionview = new UserInteractionView();
let newUserInteractionController = new UserInteractionController(
    newUserInteractionModel,
    newUserInteractionview);

let projectsUl = document.querySelector('.projects__ul');
let projectsP  = document.querySelector('.projects__description .description');

// newUserInteractionController.method01();

projectsP.addEventListener('mouseenter',(event)=>
{
   newUserInteractionController.showProjectDescription(projectsUl)
})

projectsP.addEventListener('mouseout',(event)=>
{
    newUserInteractionController.hideProjectDescription(projectsUl)
})


newUserInteractionController.getProjects('http://127.0.0.1:5500/projects.json')