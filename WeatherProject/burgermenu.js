let burgermenu = document.querySelector(".burgermenu")
let backmenu = document.querySelector(".backmenu")
let main = document.querySelector(".main")



burgermenu.addEventListener("click", () => {
    main.classList.add("active")
})

backmenu.addEventListener("click", () => {
    main.classList.remove("active")
    
})