var sidenav=document.getElementById("sideNav")
var menubar=document.getElementById("menuIcon")
var closenav=document.getElementById("closeNav")

menubar.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product
var search=document.getElementById("search")
var productContainer=document.getElementById("productContainer")

var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
   
    for(count=0;count<productlist.length;count=count+1)
    {
   var productname=productlist[count].querySelectorAll("h1").textContent
   
   
    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
       productlist[count].style.display="none"
    }
    else{
       productlist[count].style.display="block"
    }
   }
   
       })
   </script>
