const buttonClick = document.getElementById("open-popout");
const popout = document.getElementById("modal-wrapper");
const popOut = document.getElementById("popout");
const result = document.getElementById("result");
const buttonPopout = document.getElementById("close-popout");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const alertError = document.querySelector(".alert-error");

buttonClick.addEventListener("click", openPopout);
buttonPopout.addEventListener("click", closePopout);

function openPopout(event) {
  event.preventDefault();
  popout.style.display = "flex";
  popOut.style.display = "flex";
  const height = inputHeight.value;
  const weight = inputWeight.value;
  const resultImc = IMC(weight, height).toFixed(2);
  result.innerHTML = `Seu IMC é de ${resultImc}`;
}

function closePopout() {
  popout.style.display = "none";
}

function IMC(weight, height) {
  return weight / ((height / 100) ** 2).toFixed(2);
}
