const celcius = document.querySelector(".celcius")
const kelvin = document.querySelector(".kelvin")
const farenheit = document.querySelector(".farenheit")
const form = document.querySelector(".form")


form.addEventListener("input", converttemp)

function converttemp(e){

 if(e.target.classList.contains("celcius")){
    let x = e.target.value
    kelvin.value = (Number (x)+273.15).toFixed(2)
    farenheit.value =  ((Number(x)*1.8) + 32).toFixed(2)
 }
 if(e.target.classList.contains("kelvin")){
    let x = e.target.value
    celcius.value = (Number (x) - 273.15).toFixed(2)
    farenheit.value = ( (1.8 * (x-273.15)) +32).toFixed(2)
 }
 if(e.target.classList.contains("farenheit")){
    let x = e.target.value
    kelvin.value = (((1.8) * (x-273)) +32).toFixed(2)
    celcius.value =(( 1.8 * x) -32).toFixed(2)
 }

}

