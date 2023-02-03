import { modal } from "../js/modal.js";
const openPopout = document.querySelector("#open-popout");
const closePopout = document.querySelector("#close-popout");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

//EVENTOS
openPopout.addEventListener("click", popoutOpen);
closePopout.addEventListener("click", popoutClose);
closePopout.document.addEventListener("keydown", function (event) {
  if (event.closePopout === "Escape") {
    modal.close();
  }
});

//FUNCTIONS
function popoutOpen(event) {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const innerResult = document.querySelector("#result");

  const result = imcResult(weight, height).toFixed(2);
  innerResult.innerHTML = `Seu IMC é de ${result}`;

  modal.open();
}

function popoutClose() {
  modal.close();
}

function imcResult(weight, height) {
  return weight / ((height / 100) ** 2).toFixed(2);
}
