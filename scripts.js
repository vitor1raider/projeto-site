const btnMenu = document.getElementById("menu-burguer")
const menu = document.getElementById("menu")

btnMenu.classList.add("menu-burguer-js-enabled")

function closeMenu(){
    btnMenu.setAttribute("aria-expanded", "false")
    menu.setAttribute("aria-hidden", "true")
    menu.classList.add("menu-closed")
}

closeMenu()

btnMenu.addEventListener("click", function(){
    let expanded = this.getAttribute("aria-expanded") === "true" ? true : false

    document.removeEventListener("click", closeMenu)

    if(expanded){
        menu.classList.add("menu-closed")
    } else{
        menu.classList.remove("menu-closed")
    }

    this.setAttribute("aria-expanded", !expanded)
    menu.setAttribute("aria-hidden", expanded)

    setTimeout(function(){
        if(!expanded){
            document.addEventListener("click", closeMenu)
        }
    }, 1)
})