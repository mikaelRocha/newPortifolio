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
        let projectsUl = document.querySelector('.projects__ul') 
        console.log(GET_Projects);
        GET_Projects.forEach((element,idx) =>
        {
            projectsUl.insertAdjacentHTML("afterbegin",`  
            <li class="projects__item">
                <ul class="item__images">
                    <li></li>
                </ul>
                <div class='project__description'>
                    <article>
                        <p class="description" project="description" >
                            ${element.description}
                        </p>
                       <p class="technologys"  project="technologys"> 
                            ${element.technologys}
                       </p>

                        <div class="projects__btns">
                            <span class="projects__code"       project="code">      <a btn="code" href="${element.LlinkCode}">Code              </a>  </span>
                            <span class="projects__application"project="aplication" ><a btn="application" href="${element.LlinkAplication}">Aplication</a>  </span>
                        </div>
                    </article>

                </div>
            </li>`)
        })
    }
}

export default UserInteractionView