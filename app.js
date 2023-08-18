const sum = document.querySelector("#sum")
const addElements = document.querySelectorAll(".add")
const removeElements = document.querySelectorAll(".remove")
const price = document.querySelectorAll(".price")
const refresh = document.querySelector("#refresh")
const message = document.querySelector("#message")
const moon = document.querySelector("#moon")
const sun = document.querySelector("#sun")
const mode = document.querySelector(".mode")

let counterVal = 0
let darkmode = false


for (let i = 0; i < addElements.length; i++) {
    const element = addElements[i];

    element.addEventListener("click", () => {
        const priceValue = parseFloat(price[i].textContent)
        counterVal += priceValue
        sum.textContent = counterVal +` $`
    })
}

for (let i = 0; i < removeElements.length; i++) {
    const element = removeElements[i];

    element.addEventListener("click", () => {
        const priceValue = parseFloat(price[i].textContent)
        counterVal -= priceValue
        if (counterVal < 0) {
            counterVal = 0
        }
        sum.textContent = counterVal +` $`
    })
}

refresh.addEventListener("click", () => {
    counterVal = 0
    sum.textContent = counterVal
    message.style.display = "block"
    message.style.transform = "translateX(-10%) translateY(-30%)"
    setTimeout (() => {
        message.style.transform = "translateX(-10%) translateY(100%)"
    },1500)
})

mode.addEventListener("click", () => {
    if(darkmode){
        document.body.style.backgroundColor = "black"
        darkmode = false
        moon.style.backgroundColor= "pink"
        moon.style.borderStyle = "dashed"
        sun.style.backgroundColor= "unset"
        sun.style.borderStyle = "unset"


    } else {
        document.body.style.backgroundColor = "rgb(240, 150, 204)"
        darkmode = true
        sun.style.backgroundColor= "pink"
        sun.style.borderStyle = "dashed"
        moon.style.backgroundColor= "unset"
        moon.style.borderStyle = "unset"
    }
})
