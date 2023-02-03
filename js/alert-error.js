export const error = {
  erroAlert: document.querySelector(".alert-error"),
  openError() {
    error.erroAlert.style.display = "block";
  },

  closeError() {
    error.erroAlert.style.display = "none";
  },
};
