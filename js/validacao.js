function verifaSeOChuteECerto(chute) {
  const numero = +chute;

  if (numeroInvalido(numero)) {
    elemebtoChute.innerHTML += `<div>Valor Inválido</div>`;
    return;
  }

  if (numeroForMaior(numero)) {
    elemebtoChute.innerHTML = `<div>Valor inválido: fale um númeor entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
            <h2>Você acretou!</h2>
            <h3>O númeor secreto era ${numeroSecreto}</h3>
            <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
        `;
  } else if (numero > numeroSecreto) {
    elemebtoChute.innerHTML += `
        <div>
            O número secreto é menor 
            <i class="fa-solid fa-arrow-down"></i>
        </div>
        `;
  } else {
    elemebtoChute.innerHTML += `
        <div>
            O número secreto é maior 
            <i class="fa-solid fa-arrow-up"></i>
        </div>
        `;
  }

}

function numeroInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaior(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id === "jogar-novamente") {
    window.location.reload();
  }
});
