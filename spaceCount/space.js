const input = document.querySelector(".input")
const count = document.querySelector(".count")
const remain = document.querySelector('.remain')

input.addEventListener("keyup", () => {
    const now = 50 
    count.innerHTML = input.value.length
    const diff = now - input.value.length
    remain.innerHTML = diff + " characters  remaining"

    if(diff ==0){
        remain.innerHTML = "Maximum length of characters  reached "
       
    }
    
})
