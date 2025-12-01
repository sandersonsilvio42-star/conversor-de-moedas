/* let botao = document.getElementById("converter");
let pqp = document.querySelector(".currency-select");


function inverterConversao() {
    let troca = document.querySelector(".trade").value; // valor digitado
    let currency = document.querySelector(".valor-convert");
    let currency2 = document.querySelector(".valor-final");

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.08;
    const bitcoinToday = 458046.19;
    const realToday = 1;

    if(pqp.value == "dolar2") {
        currency2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(troca * dolarToday);
    }

    if(pqp.value == "euro2") {
        currency2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(troca * euroToday);
    }

    if(pqp.value == "libra2") {
        currency2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(troca * libraToday);
    }

    if(pqp.value == "bitcoin2") {
        currency2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(troca * bitcoinToday);
    }

    if(pqp.value == "real2") {
        currency2.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(troca * realToday);
    }

    // Mostra o valor original digitado na moeda escolhida
    currency.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: pqp.value.replace("2","").toUpperCase() // pega a moeda selecionada
    }).format(troca);
}

function changeCurrency() {
    let changed = document.getElementById("dol");
    let imageChanged = document.querySelector(".image");

    if(pqp.value == "dolar2") {
        changed.innerHTML = "Dólar Americano";
        imageChanged.src = "./assets/dollar.png";
    }

    if(pqp.value == "euro2") {
        changed.innerHTML = "Euro";
        imageChanged.src = "./assets/euro.png";
    }

    if(pqp.value == "libra2") {
        changed.innerHTML = "Libra";
        imageChanged.src = "./assets/libra.png";
    }

    if(pqp.value == "bitcoin2") {
        changed.innerHTML = "Bitcoin";
        imageChanged.src = "./assets/bitcoin.png";
    }

    if(pqp.value == "real2") {
        changed.innerHTML = "Real";
        imageChanged.src = "./assets/real.png";
    }

    inverterConversao();
}

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
    const realToday = 1


    if(pqp.value == "dolar2") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(troca / dolarToday)
    }

    if(pqp.value == "euro2") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR"
    }).format(troca / euroToday)
    }

    if(pqp.value == "libra2") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP"
    }).format(troca / libraToday)
    }

    if(pqp.value == "bitcoin2") {
        currency2.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(troca / bitcoinToday)
    }
        
    if(pqp.value == "real2") {
        currency2.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(troca / 1)
    }

    currency.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(troca)
}

function changeCurrency() {
let changed = document.getElementById("dol")
let imageChanged = document.querySelector(".image")

if(pqp.value == "dolar2") {
    changed.innerHTML = "Dólar Americano"
    imageChanged.src = "./assets/dollar.png"
}

if(pqp.value == "euro2") {
    changed.innerHTML = "Euro"
    imageChanged.src = "./assets/euro.png"
}
if(pqp.value == "libra2") {
    changed.innerHTML = "Libra"
    imageChanged.src = "./assets/libra.png"
}
if(pqp.value == "bitcoin2") {
    changed.innerHTML = "Bitcoin"
    imageChanged.src = "./assets/bitcoin.png"
}

if(pqp.value == "real2") {
    changed.innerHTML = "Real"
    imageChanged.src = "./assets/real.png"
}

abacate()
}

pqp.addEventListener("change", changeCurrency)
botao.addEventListener("click", abacate) //abacate e so o 
//nome da minha função criada  e click e o evento
*/

document.addEventListener("DOMContentLoaded", () => {
  const btnConverter = document.getElementById("converter");
  const selectFrom = document.querySelector(".currency-from");
  const selectTo = document.querySelector(".currency-to");
  const inputValor = document.querySelector(".trade");

  // Caixa esquerda (origem)
  const imgFrom = document.getElementById("image-trade");      // ./assets/real.png
  const labelFrom = document.querySelector(".brasil .moeda");   // "Real"
  const outOrigem = document.querySelector(".valor-convert");   // R$ 0

  // Caixa direita (destino)
  const imgTo = document.querySelector(".usa .image");          // ./assets/dollar.png
  const labelTo = document.getElementById("dol");               // "Dólar Americano"
  const outDestino = document.querySelector(".valor-final");    // U$ 0

  // Cotações fixas (BRL como base)
  const rates = {
    USD: { rate: 5.2,  label: "Dólar Americano", img: "./assets/dollar.png", locale: "en-US" },
    EUR: { rate: 6.2,  label: "Euro",            img: "./assets/euro.png",   locale: "de-DE" },
    GBP: { rate: 7.08, label: "Libra",           img: "./assets/libra.png",  locale: "en-GB" },
    BTC: { rate: 458046.19, label: "Bitcoin",    img: "./assets/bitcoin.png",locale: "en-US" },
    BRL: { rate: 1,    label: "Real",            img: "./assets/real.png",   locale: "pt-BR" }
  };

  function formatCurrency(value, code, locale) {
    if (code === "BTC") {
      const num = Number(value);
      return `₿ ${num.toLocaleString(locale || "en-US", {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8
      })}`;
    }
    return new Intl.NumberFormat(locale, { style: "currency", currency: code }).format(value);
  }

  function parseValorBR(valorStr) {
    if (!valorStr) return NaN;
    // Remove qualquer símbolo/moeda e espaços
    let s = valorStr.replace(/[^\d.,-]/g, "").trim();
    // Se tiver separadores brasileiros (pontos de milhar e vírgula decimal)
    // Ex: "10.000,50" -> "10000.50"
    const temVirgula = s.includes(",");
    const temPonto = s.includes(".");
    if (temVirgula && temPonto) {
      s = s.replace(/\./g, "").replace(",", ".");
    } else if (temVirgula && !temPonto) {
      s = s.replace(",", ".");
    }
    return Number(s);
  }

  function atualizarLabelsEImagens() {
    const from = rates[selectFrom.value];
    const to = rates[selectTo.value];

    // Atualiza caixa esquerda (origem)
    labelFrom.textContent = from.label;
    imgFrom.src = from.img;

    // Atualiza caixa direita (destino)
    labelTo.textContent = to.label;
    imgTo.src = to.img;
  }

  function converter() {
    const valor = parseValorBR(inputValor.value);
    const fromCode = selectFrom.value;
    const toCode = selectTo.value;

    // Valida códigos e valor
    const from = rates[fromCode];
    const to = rates[toCode];

    if (!from || !to) {
      outDestino.textContent = "Seleção inválida";
      outOrigem.textContent = "—";
      return;
    }

    if (!Number.isFinite(valor) || valor <= 0) {
      outDestino.textContent = "Digite um valor válido";
      outOrigem.textContent = "—";
      return;
    }

    // Passo 1: origem -> reais
    const emReais = valor * from.rate;
    // Passo 2: reais -> destino
    const convertido = emReais / to.rate;

    // Exibe o valor original na caixa esquerda
    outOrigem.textContent = formatCurrency(valor, fromCode, from.locale);

    // Exibe o convertido na caixa direita
    outDestino.textContent = formatCurrency(convertido, toCode, to.locale);
  }

  // Eventos
  selectFrom.addEventListener("change", () => { atualizarLabelsEImagens(); converter(); });
  selectTo.addEventListener("change",   () => { atualizarLabelsEImagens(); converter(); });
  btnConverter.addEventListener("click", converter);

  // Inicializa UI
  atualizarLabelsEImagens();
  // Se quiser já calcular com o placeholder vazio, comente a linha abaixo
  // converter();
});
