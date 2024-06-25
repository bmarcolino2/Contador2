// Função para criar um novo contador
function criarNovoContador() {
    // Cria os elementos do contador
    const contadorContainer = document.createElement("div");
    contadorContainer.className = "contador";

    const contadorDisplay = document.createElement("span");
    contadorDisplay.textContent = "0";
    contadorDisplay.className = "contador-valor";

    const botaoAumentar = document.createElement("button");
    botaoAumentar.textContent = "Aumentar";

    const botaoDiminuir = document.createElement("button");
    botaoDiminuir.textContent = "Diminuir";

    const botaoApagar = document.createElement("button");
    botaoApagar.textContent = "Apagar";

    // Adiciona os elementos ao container do contador
    contadorContainer.appendChild(contadorDisplay);
    contadorContainer.appendChild(botaoAumentar);
    contadorContainer.appendChild(botaoDiminuir);
    contadorContainer.appendChild(botaoApagar);

    // Adiciona o container ao DOM
    document.querySelector("#contadores").appendChild(contadorContainer);


    // Funções de manipulação do estado do contador
    function aumentar() {
        contadorValue++;
        mostrarNaTela();
    }

  // Estado do contador
  let contadorValue = 0;


    function diminuir() { 
        contadorValue--;
        mostrarNaTela();   
    }

    function mostrarNaTela() {
        contadorDisplay.textContent = contadorValue;
    }

    function apagar() {
        contadorContainer.remove();
    }

    // Adiciona os event listeners aos botões
    botaoAumentar.addEventListener("click", aumentar);
    botaoDiminuir.addEventListener("click", diminuir);
    botaoApagar.addEventListener("click", apagar);

    // Exibe o valor inicial do contador
    mostrarNaTela();
}

// Adiciona um contador inicial ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#novo-contador").addEventListener("click", criarNovoContador);
    criarNovoContador(); // Cria um contador inicial
});
