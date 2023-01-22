const copyBtn = document.querySelector(".copy")

const input = document.querySelector(".input")



const  copyId = (e)  => {
    e.preventDefault()

    input.select();
input.setSelectionRange()

document.execCommand("copy")

copyBtn.innerHTML ="Copied!!"
setTimeout( () => {
    copyBtn.innerHTML ="Copy"
},2000)


}

copyBtn.addEventListener("click", copyId)