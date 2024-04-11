// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    
    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("fas fa-bars","fas fa-bars")
        }

        else{
            closeBtn.classList.replace("fas fa-bars","fas fa-bars")
        }
    }
}

