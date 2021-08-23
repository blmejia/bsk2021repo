///navigation
let nav = document.querySelector(".nav");
let burger = document.getElementById("bars");
let drawer = document.getElementById("drawer")

burger.addEventListener('click', function(){
    if( drawer.style.display === "none"){
        drawer.style.display = "block"
    }
     else {
         drawer.style.display = "none";
    }
 
 });

 //transition on scroll

 window.onscroll = function(){
    if(window.scrollY > 80){
        nav.classList.add(" nav-active")
       
        
      
    }
    else{
        nav.classList.remove(" nav-active")
            
      
    }
}