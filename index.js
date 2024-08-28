var sidenav=document.getElementById("sideNav")
var menubar=document.getElementById("menuIcon")
var closenav=document.getElementById("closeNav")

menubar.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})