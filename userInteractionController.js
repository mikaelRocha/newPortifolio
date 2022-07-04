class UserInteractionController {
    constructor(userInteractionModel, userInteractionview) 
    {
      this.userInteractionview = userInteractionview;
      this.userInteractionModel = userInteractionModel
    }

    getProjects(projectsJSON) 
    {
        this.userInteractionModel.getProjects(projectsJSON)
        .then((response) => {
             this.userInteractionview.showProjects(response)
        })
    }

    handleClick(idButton)
    {
        console.log(idButton);
        if(idButton === "b1")
        {
            this.goTo('projects')
        }
        if(idButton === "b2")
        {
            this.goTo('about-me')
        }
        if(idButton === "b3")
        {
            this.goTo('skills')
        }
        if(idButton === "linkedin")
        {
            this.goLink('https://www.linkedin.com/in/mikael-rocha-170939127/')
        }
        if(idButton === "github")
        {
            this.goLink('https://github.com/mikaelRocha')
        }
        if(idButton === "whatsapp")
        {
            this.goLink('https://api.whatsapp.com/send?phone=5547992151265')
        }
        if(idButton === "gmail")
        {
         
            let textArea = document.querySelector('#my-email');
        console.log(textArea);
            textArea.select();
            textArea.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(textArea.value);

            alert("Email copied: " + textArea.value);
          
        
        }
 
    }

    goTo(idElement)
    {
        const topValue = document.getElementById(idElement).getBoundingClientRect()
        window.scrollTo({
        top: topValue.top,
        left: 0,
        behavior: "smooth"
     });
    }

    goLink(url)
    {
       window.open(url,'_blank');
    }
   
}

export default UserInteractionController