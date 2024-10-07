let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let counter = document.querySelector("#counter")
let rand = document.querySelector("#rand")
let res = document.querySelector("#res")

let value = 0
counter.textContent = value

inc.onclick = () => {
    value++
    counter.textContent = value
}

dec.onclick = () => {
    value--
    counter.textContent = value
}

rand.onclick = () => {
    const max = 100
    let randomValue = Math.floor(Math.random() * max)
    value += randomValue
    counter.textContent = value
}

res.onclick = () => {
    value = 0
    counter.textContent = value
}