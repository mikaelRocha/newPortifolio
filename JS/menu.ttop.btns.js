const aboutButton = document.getElementById('b3');
const projectsButton = document.getElementById('b2');
const projectsElement       = document.querySelector('.my-projects');
const aboutElement       = document.querySelector('.my-about');
const myPool       = document.querySelector('.my-pool');
// console.log(window) ;

document.addEventListener("click", (event)=>
{
    if (event.target.id === "b2") 
    {
        console.log("working")
            window.scrollBy({ 
                top: aboutElement.getBoundingClientRect().top  -  100, 
                left: 0, 
                behavior: 'smooth' 
              });
        
      
    }
    if (event.target.id === "b1") 
    {
        console.log("working")
            window.scrollBy({ 
                top:  projectsElement.getBoundingClientRect().top  -  100, 
                left: 0, 
                behavior: 'smooth' 
              })
        
      
    }
    if (event.target.id === "b3") 
    {
        console.log("working")
            window.scrollBy({ 
                top: myPool.getBoundingClientRect().top  -  100,
                left: 0, 
                behavior: 'smooth' 
              });
        
      
    }
    if (event.target.id === "ttop") 
    {
        console.log("working")
            window.scrollTo({ 
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
              })
        
      
    }
})