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
}

export default UserInteractionView