const countEl = document.querySelector(".count")
const generate = document.querySelector(".genrate")


generate.addEventListener("click", function(){
    getNumber()
})

function getNumber(){
    const randomNumber = Math.floor(Math.random()*10 +1 )
    countEl.innerHTML = randomNumber
}
