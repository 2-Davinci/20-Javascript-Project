const calBtn = document.querySelector(".btn")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")
const error = document.querySelector(".error")
function hasError(){
    setTimeout (() =>{
        error.style.display = "none"
    }, 3000)
}

const calTipAmount = () => {
    const bill = document.querySelector(".bill").value
    const rate = document.querySelector(".rate").value

    if(bill == "" || rate == ""){
        error.style.display = "block"
        hasError()
    }
    else if (isNaN(bill) ){
        error.innerHTML = `Please Input a Number`
        error.style.display = "block"
        hasError()
    }
    else {
        let tipAmt = Math.ceil (bill * rate)
        tip.innerHTML =  ` Tip Amount : $${tipAmt}`

        let totalAmt = Math.ceil( Number(bill) + tipAmt)
        total.innerHTML = ` Total Bill : $${totalAmt}`
    }
    
}
calBtn.addEventListener("click" , calTipAmount)