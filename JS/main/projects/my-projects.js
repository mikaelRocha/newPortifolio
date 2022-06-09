
const btnProjectRollerRight  = document.querySelector('#roller-left');
const btnProjectRollerLeft   = document.querySelector('#roller-right');
const firstProjectsLi        = document.querySelector('.container-projects ul');

console.log
(
 btnProjectRollerLeft,
 btnProjectRollerRight,
 firstProjectsLi
);

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