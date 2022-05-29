
const centerArticle = document.getElementById('highlight-center');
const bigImage =document.getElementById('highlight-big-image-on-right');


centerArticle.addEventListener('mouseover', (event)=>{

    if (event.target.id === 'first-highlight-li') 
    {
    bigImage.style.opacity = 1
    }
})
centerArticle.addEventListener('mouseout', (event)=>{

    
    bigImage.style.opacity = 0
  
})