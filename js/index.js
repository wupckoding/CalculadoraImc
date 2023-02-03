import { modal } from "../js/modal.js";
import { error } from "../js/alert-error.js";
import { utils } from "./utils.js";

const openPopout = document.querySelector("#open-popout");
const closePopout = document.querySelector("#close-popout");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

//EVENTOS
openPopout.addEventListener("click", popoutOpen);
closePopout.addEventListener("click", popoutClose);

//FUNCTIONS
function popoutOpen(event) {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const innerResult = document.querySelector("#result");

  const weightOrHeightIsNotANumber =
    utils.errorAlert(weight) || utils.errorAlert(height);

  if (weightOrHeightIsNotANumber) {
    error.openError();
    return;
  } else {
    error.closeError();
  }

  const result = utils.imcResult(weight, height).toFixed(2);
  innerResult.innerHTML = `Seu IMC é de ${result}`;

  modal.open();
}

function popoutClose() {
  modal.close();
}

inputHeight.oninput = () => error.closeError();
inputWeight.oninput = () => error.closeError();
