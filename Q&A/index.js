const btns = document.querySelectorAll(".question-btn")

btns.forEach(function(open){
    open.addEventListener("click", function(menu){
        const style = menu.currentTarget.parentElement.parentElement
        style.classList.toggle("show-text")
        
    })
 
   
   
})