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
            // console.log(idx, GET_Projects);
           
            this.projectsUl.insertAdjacentHTML("afterbegin",`  
            <li class="projects__item  " item=''>
                <h1>${GET_Projects[idx].title}</h1>

                <img src="" class=""/>

                <div class="description"> 
                    <a href="">See the code</a>
                    <a href="">See the Aplication</a>
                </div>
           
            </li>`)
        })
    }


  
  
}

export default UserInteractionView