const pounds = document.querySelector(".pounds")
const kilogram = document.querySelector(".kilograms")
const grams = document.querySelector(".grams")
const ounce = document.querySelector(".ounces")
const form = document.querySelector(".form")
const error = document.querySelector(".error")


form.addEventListener("input", covertWeight)

form.addEventListener("submit", function(e){
    e.preventDefault()
})

function covertWeight(e){
    if (e.target.classList.contains("pounds")) {
        let x = e.target.value;
        kilogram.value = (x / 2.2046).toFixed(2); 
        grams.value = (x / 0.0022046).toFixed(2);
        ounce.value = (x * 16).toFixed(2);
      }
    
    if(e.target.classList.contains("kilograms")){
        let x = e.target.value
        pounds.value = (x* 2.2046).toFixed(2)
        grams.value = (x*1000).toFixed(2)
        ounce.value = (x*35.274).toFixed(2)
    }
    if(e.target.classList.contains("grams")){
        let x = e.target.value
        kilogram.value = (x/1000).toFixed(2)
        pounds.value = (x/0.0022046).toFixed(2)
        ounce.value = (x*16).toFixed(2)
    }
    if(e.target.classList.contains("ounces")){
        let x = e.target.value
        kilogram.value = (x/35.274).toFixed(2)
        grams.value = (x/0.035274).toFixed(2)
        ounce.value = (x*0.0625).toFixed(2)
    }
    
}