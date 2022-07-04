
import UserInteractionController from './userInteractionController.js';
import UserInteractionModel from './userInteractionModel.js';
import UserInteractionView from './userInteractionView.js';

let newUserInteractionModel = new UserInteractionModel();
let newUserInteractionview = new UserInteractionView();
let newUserInteractionController = new UserInteractionController(
    newUserInteractionModel,
    newUserInteractionview);


newUserInteractionController.getProjects('http://127.0.0.1:5500/projects.json')


document.addEventListener('click', (e) => newUserInteractionController.handleClick(e.target.id))

