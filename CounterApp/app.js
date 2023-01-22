const addBtn = document.querySelector(".add")
const subBtn = document.querySelector(".subtract")
const resetBtn = document.querySelector(".reset")
const countEl = document.querySelector(".count")

addBtn.addEventListener("click", function(){
    countEl.innerHTML++
    setColor()
    
})
subBtn.addEventListener("click", function(){
    countEl.innerHTML--
    setColor()
})
resetBtn.addEventListener("click", function(){
    countEl.innerHTML=0
    setColor()
})
function setColor(){
    if(countEl.innerHTML < 0 ){
        countEl.style.color = "orangered"
    }
    else if(countEl.innerHTML > 0 ){
        countEl.style.color = "yellow"
    }
    else{
        countEl.style.color = "white"
    }

}
