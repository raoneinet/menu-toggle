let showMenu = document.querySelector("aside")
let menuCloser = document.querySelector(".menu-closer a")
let menuOpener = document.querySelector(".menuToggle a")

menuOpener.addEventListener("click", (i)=>{
    i.preventDefault()
   openMenu()
})

menuCloser.addEventListener("click", (e)=>{
    e.preventDefault()
    closeMenu()
})

function openMenu(){
    if(!showMenu.classList.contains("show")){
        showMenu.classList.add("show")
        document.querySelector(".menuToggle").style.display = "none"
    }
}

function closeMenu(){
    if(showMenu.classList.contains("show")){
        showMenu.classList.remove("show")
        document.querySelector(".menuToggle").style.display = "block"
    }
}