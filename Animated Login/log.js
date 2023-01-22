const login = document.querySelector(".login-link");
const register = document.querySelector(".register-link");
const closeBtn = document.querySelector(".close")
const forgot = document.querySelector(".forgot-link");
const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

register.addEventListener("click" ,(e) =>{
    loginSection.style.display ="None"
    registerSection.style.display ="flex"
})
login.addEventListener("click", (e) =>{
    registerSection.style.display ="none"
    loginSection.style.display ="flex"
   
})
forgot.addEventListener('click', (e) => {
    loginSection.style.display ="none"
    forgotSection.style.display ="flex"
})
closeBtn.addEventListener("click", (e) => {
    forgotSection.style.display = "none"
    loginSection.style.display = "flex"
})


