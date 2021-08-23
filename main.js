///navigation
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