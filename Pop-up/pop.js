const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector("#times")
const popUp = document.querySelector(".pop-up")
const body = document.querySelector(".content")

openBtn.addEventListener("click" , function(){
    popUp.classList.toggle("active")

})
closeBtn.addEventListener("click", function(){
    popUp.classList.remove("active")
  

})
