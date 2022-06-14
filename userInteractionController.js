class UserInteractionController {
    constructor(userInteractionModel, userInteractionview) 
    {
      this.userInteractionview = userInteractionview;
      this.userInteractionModel = userInteractionModel
    }

    showProjectDescription(projectsUl) 
    {
        this.userInteractionview.showProjectDescription(projectsUl)
    }
    hideProjectDescription(projectsUl) 
    {
        this.userInteractionview.hideProjectDescription(projectsUl)
    }


    getProjects(projectsJSON) 
    {
        this.userInteractionModel.getProjects(projectsJSON)
        .then((response) => {
             this.userInteractionview.showProjects(response)
        })
    }
}

export default UserInteractionController