const toggleDarkMode =document.querySelector(".toggle-darkmode")
const toggleText =document.querySelector(".toggle-text")
const backgroundColors = document.querySelector(".darkmode")



let darkMode = localStorage.getItem("darkMode")


const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    toggleText.innerHTML = "Light"
    localStorage.setItem("darkMode", "enabled")
}
const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    toggleText.innerHTML = "Dark"
    localStorage.setItem("darkMode", null)
}
if(darkMode == "enabled"){
    enableDarkMode()
}
toggleDarkMode.addEventListener("click", () => {
    let darkMode = localStorage.getItem("darkMode")

    if(darkMode !==  "enabled"){
        enableDarkMode()
    }
    else{
        disableDarkMode()
    }
})


