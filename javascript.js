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

document.addEventListener("DOMContentLoaded", async () => {
  const btnConverter = document.getElementById("converter");
  const selectFrom = document.querySelector(".currency-from");
  const selectTo = document.querySelector(".currency-to");
  const inputValor = document.querySelector(".trade");

  // Caixa esquerda (origem)
  const imgFrom = document.getElementById("image-trade");      
  const labelFrom = document.querySelector(".brasil .moeda");   
  const outOrigem = document.querySelector(".valor-convert");   

  // Caixa direita (destino)
  const imgTo = document.querySelector(".usa .image");          
  const labelTo = document.getElementById("dol");               
  const outDestino = document.querySelector(".valor-final");    

  // Elemento para mostrar última atualização
  const ultimaAtualizacao = document.getElementById("ultima-atualizacao");

  // Estrutura inicial das moedas
  const rates = {
    USD: { rate: 0, label: "Dólar Americano", img: "./assets/dollar.png", locale: "en-US" },
    EUR: { rate: 0, label: "Euro",            img: "./assets/euro.png",   locale: "de-DE" },
    GBP: { rate: 0, label: "Libra",           img: "./assets/libra.png",  locale: "en-GB" },
    BTC: { rate: 0, label: "Bitcoin",         img: "./assets/bitcoin.png",locale: "en-US" },
    BRL: { rate: 1, label: "Real",            img: "./assets/real.png",   locale: "pt-BR" }
  };

  // 🔹 Função para buscar cotações reais via AwesomeAPI
  async function atualizarRates() {
    try {
      const resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL");
      const dados = await resposta.json();

      rates.USD.rate = parseFloat(dados.USDBRL.bid);
      rates.EUR.rate = parseFloat(dados.EURBRL.bid);
      rates.GBP.rate = parseFloat(dados.GBPBRL.bid);
      rates.BTC.rate = parseFloat(dados.BTCBRL.bid);
      rates.BRL.rate = 1;

      // Exibe data/hora da última atualização formatada
      const agora = new Date();
      const dia = String(agora.getDate()).padStart(2, "0");
      const mes = String(agora.getMonth() + 1).padStart(2, "0");
      const ano = agora.getFullYear();
      const hora = String(agora.getHours()).padStart(2, "0");
      const minuto = String(agora.getMinutes()).padStart(2, "0");

      ultimaAtualizacao.textContent = `Última atualização: ${dia}/${mes}/${ano} às ${hora}:${minuto}`;

      console.log("Cotações atualizadas:", rates);
    } catch (erro) {
      console.error("Erro ao buscar cotações:", erro);
      ultimaAtualizacao.textContent = "Erro ao atualizar cotações";
    }
  }

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
    let s = valorStr.replace(/[^\d.,-]/g, "").trim();
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
    labelFrom.textContent = from.label;
    imgFrom.src = from.img;
    labelTo.textContent = to.label;
    imgTo.src = to.img;
  }

  function converter() {
    const valor = parseValorBR(inputValor.value);
    const fromCode = selectFrom.value;
    const toCode = selectTo.value;

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

    if (!to.rate || to.rate <= 0 || !from.rate || from.rate <= 0) {
      outDestino.textContent = "Cotação indisponível";
      outOrigem.textContent = "—";
      return;
    }

    // Passo 1: origem -> reais
    const emReais = valor * from.rate;
    // Passo 2: reais -> destino
    const convertido = emReais / to.rate;

    outOrigem.textContent = formatCurrency(valor, fromCode, from.locale);
    outDestino.textContent = formatCurrency(convertido, toCode, to.locale);
  }

  // Eventos
  selectFrom.addEventListener("change", () => { atualizarLabelsEImagens(); converter(); });
  selectTo.addEventListener("change",   () => { atualizarLabelsEImagens(); converter(); });
  btnConverter.addEventListener("click", converter);

  // 🔹 Inicializa
  btnConverter.disabled = true; // desabilita até carregar as taxas
  await atualizarRates();       // pega as cotações reais
  atualizarLabelsEImagens();
  btnConverter.disabled = false; // libera o botão

  // Atualiza automaticamente a cada 30 minutos
  setInterval(atualizarRates, 1800000);
});
