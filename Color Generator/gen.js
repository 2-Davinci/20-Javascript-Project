const HexEl = document.querySelector(".color")
const genBtn = document.querySelector(".generate")


const getColor = () => {
    const  color = Math.random().toString(16).substring(2,8)
     document.body.style.backgroundColor = "#" + color ;
     HexEl.innerHTML = "#" + color
  
}
genBtn.addEventListener("click", function(){
    getColor()
})




genBtn.addEventListener("click", function(){
     changebG()
})
// editabel input
// HexEl.addEventListener("onchange", () => {
//     getColor()
//     changebG()
// })