class UserInteractionView {
 constructor()
 {
    this.projectsUl = document.querySelector('.projects__container') 
 }
    showProjects(GET_Projects)
    {
      
        console.log(GET_Projects);
        GET_Projects.forEach((element,idx) =>
        {
            console.log(idx, GET_Projects);
            let lastChild = idx === 0? "last-project" : "";
            this.projectsUl.insertAdjacentHTML("afterbegin",`  
            <li class="projects__item  ${lastChild}" item=''>
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

    scroller(side)
    {
       if(side === 'left'){ 
        this.projectsUl.scrollBy({
            top:0,
            left:-500,
            behavior: "smooth"
        })
       }
       else if(side === 'right')
       { 
        this.projectsUl.scrollBy({
            top:0,
            left:500,
            behavior: "smooth"
        })
        }    

        let AllItems = document.querySelectorAll('[item]')
        console.log(AllItems.length);
        console.log(this.projectsUl.getBoundingClientRect().width);
        console.log(this.projectsUl.scrollWidth - this.projectsUl.getBoundingClientRect().width);
        
        if ( this.projectsUl.scrollLeft >= this.projectsUl.scrollWidth - this.projectsUl.getBoundingClientRect().width) 
        {
            this.projectsUl.scrollTo({
                top:0,
                left:0,
                behavior: "smooth"
            })
        }
    }
   
}

export default UserInteractionView