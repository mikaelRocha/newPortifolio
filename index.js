
// import './JS/main/home/highlight.project.hover.js'
// import './JS/main/home/slide.btns.js'

// import './JS/main/projects/my-projects.js'

// import './JS/menu.ttop.btns.js'
// import './JS/mouseFollower.js'
import UserInteractionController from './userInteractionController.js';
import UserInteractionModel from './userInteractionModel.js';
import UserInteractionView from './userInteractionView.js';

let newUserInteractionModel = new UserInteractionModel();
let newUserInteractionview = new UserInteractionView();
let newUserInteractionController = new UserInteractionController(
    newUserInteractionModel,
    newUserInteractionview);

let projectsUl = document.querySelector('.projects__ul');
let projectsP           = document.querySelector('.projects__description div');

newUserInteractionController.method01();

projectsP.addEventListener('mouseenter',(event)=>
{
    if(projectsUl.getAttribute("overflow") === "scroll")
    {
        projectsUl.style.overflow = 'visible';
    }
})

projectsP.addEventListener('mouseout',(event)=>
{
    if(projectsUl.getAttribute("overflow") === "visible")
    {
         projectsUl.style.overflowY = 'scroll';
    }
})