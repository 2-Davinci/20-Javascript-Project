const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
function countdown(){
    const newYear = new Date(2023,11,31,00,00,00)
    const currentDate = new Date()
    const totalseconds = (newYear - currentDate)/1000
    const days = Math.floor(totalseconds/3600/24)
    const hours = Math.floor (totalseconds/3600)%24
    const minutes = Math.floor(totalseconds/60)%60
    const seconds =Math.floor(totalseconds%60 ) 

    daysEl.textContent =  formatTime(days)
    hoursEl.textContent = formatTime(hours)
    minutesEl.textContent = formatTime(minutes)
    secondsEl.textContent = formatTime(seconds) 
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}


setInterval(countdown, 1000)
countdown()