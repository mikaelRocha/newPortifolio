
document.body.insertAdjacentHTML("afterbegin", "<div id='mouse-follower' class='mouse-follower'> </div>");

let circle = document.getElementById('mouse-follower');const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
document.addEventListener('mousemove', onMouseMove);