// Seleciona todas as caixas e os botões (querySelectorAll / querySelector)
const caixas = document.querySelectorAll(".caixa");
const btnPrincipal = document.querySelector("#btn-principal");
const btnSecundario = document.querySelector("#btn-secundario");

// 1) Ao clicar em uma caixa, ela fica com a borda verde
caixas.forEach(function (caixa) {
  caixa.addEventListener("click", function () {
    caixa.style.border = "3px solid green";
  });
});

// 2) Ao clicar no botão secundário, todas as caixas perdem a borda
btnSecundario.addEventListener("click", function () {
  caixas.forEach(function (caixa) {
    caixa.style.border = "none";
  });
});

// 3) Ao clicar no botão principal, todas as caixas ficam com a borda azul
btnPrincipal.addEventListener("click", function () {
  caixas.forEach(function (caixa) {
    caixa.style.border = "3px solid blue";
  });
});
