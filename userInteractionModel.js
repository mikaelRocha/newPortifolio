class UserInteractionModel {
    constructor() 
    {
       
    }
    getProjects(projectsJSON)
    {
        
       return fetch(projectsJSON)
        .then((response) => response.json())
       

        
       
    }
 

}

export default UserInteractionModel