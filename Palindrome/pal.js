const check = document.querySelector(".text")
const checkBtn = document.querySelector(".check")
const form = document.querySelector(".form")

form.addEventListener("submit", function(e){
    e.preventDefault()
})


checkBtn.addEventListener("click", palindrome)

function palindrome(){
    const word = document.querySelector(".input").value
    let len = word.length;
if(word.trim() == "") return
    let start = word.substring(0, Math.floor(len/2)).toLowerCase()
    let end = word.substring(len - Math.floor(len/2)).toLowerCase()

    let flip = end.split("").reverse().join("")
    
    // let flip = [...end].reverse("").join("")

    if(start == flip){
        check.innerHTML = `${word.toUpperCase()}  is a palindrome`
    }
    else {
        check.innerHTML = `${word.toUpperCase()}  is not  a palindrome`
    }
}
