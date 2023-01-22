const plusBtn = document.querySelector(".plus")
const minusBtn = document.querySelector(".minus")
const answer = document.querySelector(".answer")

plusBtn.addEventListener("click" , () => {
    answer.classList.toggle("show-text")
    minusBtn.classList.add("show-text")
})



