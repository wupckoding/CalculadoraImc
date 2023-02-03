export const modal = {
  popout: document.querySelector("#modal-wrapper"),
  popOut: document.querySelector("#popout"),
  erroAlert: document.querySelector(".alert-error"),

  open() {
    modal.popOut.style.display = "flex";
    modal.popout.style.display = "flex";
  },

  close() {
    modal.popOut.style.display = "none";
    modal.popout.style.display = "none";
  },

  openError() {
    modal.erroAlert.style.display = "block";
  },

  closeError() {
    modal.erroAlert.style.display = "none";
  },
};

window.addEventListener("keydown", closePopout);

function closePopout(event) {
  if (event.key === "Escape") {
    modal.close();
  }
}
