
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

    firstProjectsLi.scroll({
        top: 0,
        left: firstProjectsLi.scrollLeft + 1000,
        behavior: 'smooth'
      });
})
btnProjectRollerLeft.addEventListener("click", (event)=>{

    firstProjectsLi.scroll({
        top: 0,
        left: firstProjectsLi.scrollLeft - 1000,
        behavior: 'smooth'
      });
})