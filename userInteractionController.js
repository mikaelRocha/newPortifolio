class UserInteractionController {
    constructor(userInteractionModel, userInteractionview) 
    {
      this.userInteractionview = userInteractionview;
      this.userInteractionModel = userInteractionModel
    }

    getProjects(projectsJSON) 
    {
        this.userInteractionModel.getProjects(projectsJSON)
        .then((response) => {
             this.userInteractionview.showProjects(response)
        })
    }

    clickEventHandler(target)
    {
        console.log(target, " < Target ");
        
        if(target.getAttribute('btn')  === 'scroller-left' || target.getAttribute('btn')  === 'scroller-right' )
        {
            target.getAttribute('btn') === "scroller-left"? this.userInteractionview.scroller('left') : this.userInteractionview.scroller('right')
        }
 
    }

    descriptionToggle(target) {
        this.userInteractionview.descriptionToggle(target)
    }
}

export default UserInteractionController