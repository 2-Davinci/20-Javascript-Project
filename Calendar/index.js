const monthInx = new Date().getMonth()
const monthEl = document.querySelector(".date h1")
const fullDateEl = document.querySelector (".date p")
const daysEl = document.querySelector(".days")
const lastDay = new Date(new Date().getFullYear() , monthInx +1 , 0).getDate()
const firstDay = new Date(new Date().getFullYear() , monthInx  , ).getDay()

    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "July",
    "June",
    "August",
    "September",
    "October",
    "November",
    "December"
];

monthEl.textContent = months[monthInx]

fullDateEl.textContent = new Date().toDateString()

let days = "";
for(let i=firstDay ; i>0;i--){
    days += `<div class="empty"></div>`
}

for(let i =1; i<=lastDay ; i++){
    if(i== new Date().getDate()){
        days +=`<div class="todays">${i}</div>`
    }
    else{ 
    days += `<div>${i}</div>`
    }
}

daysEl.innerHTML = days;



