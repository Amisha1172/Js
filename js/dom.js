let btn = document.querySelector(".btn");
let p = document.querySelector(".p");

   

btn.addEventListener("click",()=>{
    // p.textContent="<h1>asdnfjdnsafnijadskf</h1>"
   let success = true;
   if(success){
    p.innerHTML = "<h1 class='success'>suscessfully payed</h1>"
   }
   else{
    p.innerHTML = "<h1 class='failed'>Sorry failed</h1>"
   }
});
