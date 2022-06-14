class UserInteractionView {
    showProjectDescription(projectsUl)
    {
        if(projectsUl.getAttribute("overflow") === "visible")
        {
             projectsUl.style.overflowY = 'scroll';
        }
    }

    hideProjectDescription(projectsUl)
    {
        if(projectsUl.getAttribute("overflow") === "scroll")
        {
             projectsUl.style.overflowY = 'visible';
        }
    }

    showProjects(GET_Projects)
    {
        let contentFields = document.querySelectorAll('[project]');
        console.log(GET_Projects[0]);
        console.log(contentFields);
        
        contentFields.forEach((element) =>
    {
        if(element.getAttribute('project') === "description" )
        {
            element.textContent =   GET_Projects[0].description
        }
        if(element.getAttribute('project') === "technologys" )
        {
            element.textContent =   GET_Projects[0].technologys
        }
    })    
    
    }
}

export default UserInteractionView