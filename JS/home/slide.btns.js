 const slidebtnRight = document.getElementById('highlight-right')
 const slidebtnLeft = document.getElementById('highlight-left')

 
//  document.defaultView.getComputedStyle(elemento,'').getPropertyValue("margin-left") 
document.addEventListener("click", (event)=>
{
 
    if(event.target.id === "highlight-right")
    {
        const comingSoonLi = document.getElementById('highlight-center').firstElementChild.firstElementChild
        const cssObjSoon = window.getComputedStyle(comingSoonLi, null);
        let   marginTop = cssObjSoon.getPropertyValue("margin-top")
        console.log(marginTop);
        let marginTopCutted = marginTop.slice(0,-2);
        marginTop = Number(marginTopCutted)

        marginTop = marginTop - slidebtnLeft.getBoundingClientRect().height;
        comingSoonLi.style.marginTop  = marginTop+"px";
        //  marginTop = cssObjSoon.getPropertyValue("margin-top")

        console.log(marginTop);

        if(marginTop < -document.getElementById('highlight-center').firstElementChild.getBoundingClientRect().height)
        {
            comingSoonLi.style.marginTop = "0"
        }
    }


    if(event.target.id === "highlight-left")
    {
        const comingSoonLi = document.getElementById('highlight-center').firstElementChild.firstElementChild
        const cssObjSoon = window.getComputedStyle(comingSoonLi, null);
        let   marginTop = cssObjSoon.getPropertyValue("margin-top")
        
        console.log(marginTop);

        let marginTopCutted = marginTop.slice(0,-2);
        marginTop = Number(marginTopCutted)

        marginTop = marginTop + slidebtnLeft.getBoundingClientRect().height;
        comingSoonLi.style.marginTop  = marginTop+"px";
        
        
        console.log(marginTop);

        if(marginTop > 0 )
        {
            comingSoonLi.style.marginTop = "0"
        }
    }
})