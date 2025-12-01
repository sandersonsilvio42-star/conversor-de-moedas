let botao = document.getElementById("converter");
let pqp = document.querySelector(".currency-select");

//quando iremos criar uma função temos que utilizar após
//o nome o {e aqui dentro digitar a variavel que iremos utilizar}
function abacate() {
    let troca = document.querySelector(".trade").value;
    let currency = document.querySelector(".valor-convert");
    let currency2 = document.querySelector(".valor-final");


    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.08
    const bitcoinToday = 458046.19


    if(pqp.value == "dolar") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(troca / dolarToday)
    }

    if(pqp.value == "euro") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR"
    }).format(troca / euroToday)
    }

    if(pqp.value == "libra") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP"
    }).format(troca / libraToday)
    }

    if(pqp.value == "bitcoin") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(troca / bitcoinToday)
    }

    currency.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(troca)
}

function changeCurrency() {
let changed = document.getElementById("dol")
let imageChanged = document.querySelector(".image")

if(pqp.value == "dolar") {
    changed.innerHTML = "Dólar Americano"
    imageChanged.src = "./assets/dollar.png"
}

if(pqp.value == "euro") {
    changed.innerHTML = "Euro"
    imageChanged.src = "./assets/euro.png"
}
if(pqp.value == "libra") {
    changed.innerHTML = "Libra"
    imageChanged.src = "./assets/libra.png"
}
if(pqp.value == "bitcoin") {
    changed.innerHTML = "Bitcoin"
    imageChanged.src = "./assets/bitcoin.png"
}


abacate()
}

pqp.addEventListener("change", changeCurrency)
botao.addEventListener("click", abacate) //abacate e so o 
//nome da minha função criada  e click e o evento

