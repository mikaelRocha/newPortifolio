
const btnProjectRollerRight  = document.querySelector('.right');
const btnProjectRollerLeft   = document.querySelector('.projects__scroller');
const firstProjectsLi        = document.querySelector('.projects__container ul');

btnProjectRollerRight.addEventListener("click", (event)=>
{
    firstProjectsLi.scrollBy({
      left: 100,
      behavior: "smooth"
    });
})

btnProjectRollerLeft.addEventListener("click", (event)=>{

    firstProjectsLi.scrollBy({ 
      left: -100,
      behavior:"smooth"
    });
})