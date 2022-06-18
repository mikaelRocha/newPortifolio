class UserInteractionView {
 constructor()
 {
    this.projectsUl = document.querySelector('.projects__ul') 
 }
    showProjects(GET_Projects)
    {
      
        console.log(GET_Projects);
        GET_Projects.forEach((element,idx) =>
        {
            this.projectsUl.insertAdjacentHTML("afterbegin",`  
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
        this.descriptionZoomToggle()
    }

    descriptionZoomToggle()
    {
       let  allProjects = document.querySelectorAll('.project__description');
        
        allProjects.forEach((element) =>
        {
            element.addEventListener('mouseover', (event) => {
                this.projectsUl.style.overflow = 'visible';  
            })
            element.addEventListener('mouseout', (event) => {
                this.projectsUl.style.overflow = 'scroll';  
            })
          
        })
    }   

    scroller(side)
    {
       if(side === 'left'){ 
        this.projectsUl.scrollBy({
            top:0,
            left:-500,
            behavior: "smooth"
        })
       }else{ 
        this.projectsUl.scrollBy({
            top:0,
            left:500,
            behavior: "smooth"
        })
    }
    }    
}

export default UserInteractionView