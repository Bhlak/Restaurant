let menu = [
    ["APPETIZERS","Salt and Pepper Calamari","Spring Rolls","Goat Meat Pepper Soup", "Chicken Pepper Soup", "BBQ Wings", "Peppered Gizzards", "Chicken Lollipops", "Shrimp Cocktail"],
    ["MEALS","Salt and Pepper Calamari","Spring Rurfygolls","Goat Meat Pepper Soup", "Chicken Pepper Soup", "BBQ Wings", "Peppered Gizzards", "Chicken Lollipops", "Shrimp Cocktail"],
    ["DESSERT","Salt and Pepper Calamari","Spring Rolls","Goat Meat Pepper Soup", "Chicken Pepper Soup", "BBQ Wings", "Peppered Gizzards", "Chicken Lollipops", "Shrimp Cocktail"]
]

const loader = document.querySelector(".preloader")

const scrollCheck = () =>{
    let scroller = window.scrollY
    const navBar = document.querySelector("#nav") 
    const navUl = document.querySelector("#nav-ul")
    const lists = document.querySelectorAll(".nav-els")
    const links = document.querySelectorAll(".nav-el-as")
    const topDiv = document.querySelector("#top-div")
    const body = document.body
    if(loader.classList.contains("loaded")){
        if(scroller >= 341 && !navBar.classList.contains("nav-top")){
            topDiv.removeChild(navBar)
            navBar.classList.remove("nav")
            navBar.classList.add("nav-top")
            navUl.classList.remove("nav-ul")
            navUl.classList.add("nav-ul-top")
            for(let i=0; i<lists.length; i++){
                lists[i].classList.remove("nav-el")
                lists[i].classList.add("nav-el-top")
                links[i].classList.remove("nav-el-a")
                links[i].classList.add("nav-a-top")
            }
            topDiv.style.justifyContent = "center"
            let holder = body.innerHTML
            body.innerHTML = `<nav class="nav-top" id="nav">${navBar.innerHTML}</nav>` + holder
            return
        } 
        else if(scroller <= 340 && navBar.classList.contains("nav-top")){
                body.removeChild(navBar)
                navBar.classList.remove("nav-top")
                navBar.classList.add("nav")
                navUl.classList.remove("nav-ul-top")
                navUl.classList.add("nav-ul")
                for(let i=0; i<lists.length; i++){
                    lists[i].classList.remove("nav-el-top")
                    lists[i].classList.add("nav-el")
                    links[i].classList.remove("nav-a-top")
                    links[i].classList.add("nav-el-a")
                }
                let holder = topDiv.innerHTML
                topDiv.innerHTML = `<nav class="nav" id="nav">${navBar.innerHTML}</nav>` + holder
                return
            }
    }
    
}
const highlight = () =>{
    let scroller = window.scrollY
    const navBar = document.querySelector("#nav") 
    const links = document.querySelectorAll(".nav-el-as")
    if(navBar.classList.contains("nav-top")){
        if(scroller < 340 ){
            links[2].classList.remove("highlighted")
        }
        else if(scroller >= 341 && scroller <= 900){
            links[2].classList.add("highlighted")
            links[1].classList.remove("highlighted")
            return
        }
        else if(scroller >= 901 && scroller <= 1410){
            links[1].classList.add("highlighted")
            links[2].classList.remove("highlighted")
            links[0].classList.remove("highlighted")
            return
        }
        else if(scroller >= 1411 && scroller <= 2034){
            links[0].classList.add("highlighted")
            links[1].classList.remove("highlighted")
            links[3].classList.remove("highlighted")
            return
        }
        else if(scroller >= 2035){
            links[0].classList.remove("highlighted")
            links[3].classList.add("highlighted")
            return 
        }
    }
    else{
        for(let i = 0; i < links.length; i++){
            links[i].classList.remove("highlighted")
        }
    }
}

cardContainer = document.querySelector(".menu-container")
let cardCount = 0
let headText = ""
let cardCode = ""
let itemNumber = 1
let itemCounter = 0
for(cardCount; cardCount<menu.length; cardCount++){
    headText = menu[cardCount][0]
    cardCode = ""
    for(let i=1; i<menu[cardCount].length; i++){
        cardCode += `
            <span class="item-container" id="item${itemNumber}">${menu[cardCount][i]}</span>
            <span class="counter-container">
                <span class="item-counter" id="item-counter${itemNumber}">${itemCounter}</span>
                <button class="increase count" id="inrease-btn${itemNumber}" onclick="increase('#item-counter${itemNumber}')">+</button>
                <button class="decrease count" id="decrease-btn${itemNumber}" onclick="decrease('#item-counter${itemNumber}')">-</button>
            </span>
        `
        itemNumber++
    }   
    cardContainer.innerHTML += `
        <div class="menu-card card${cardCount}">
            <h4>${headText}</h4>
            <div class="form-cont">
                ${cardCode}
            </div>
            <button class="cart">ADD TO CART</button>
        </div>
    `
}


const increase = (displayer) => {
    let display = document.querySelector(displayer)
    let valueCounter = parseInt(display.textContent)
    valueCounter += 1
    display.textContent = valueCounter
}
const decrease = (displayer) => {
    let display = document.querySelector(displayer)
    let valueCounter = parseInt(display.textContent)
    if(valueCounter != 0){
        valueCounter -= 1
    }
    display.textContent = valueCounter
}


window.addEventListener('scroll', highlight)
window.addEventListener('click', highlight)
window.addEventListener('scroll', scrollCheck)
window.addEventListener('load', () => {
    loader.classList.add("loaded")
})