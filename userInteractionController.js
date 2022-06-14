class UserInteractionController {
    constructor(userInteractionModel, userInteractionview) 
    {
      this.userInteractionview = userInteractionview;
      this.userInteractionModel = userInteractionModel
    }

    showProjectDescription(projectsUl) 
    {
        userInteractionview.showProjectDescription(projectsUl)
    }
    hideProjectDescription(projectsUl) 
    {
        userInteractionview.showProjectDescription(projectsUl)
    }


    method02(param01) 
    {
        
    }
}

export default UserInteractionController