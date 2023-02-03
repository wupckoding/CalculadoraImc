export const utils = {
  imcResult(weight, height) {
    return weight / ((height / 100) ** 2).toFixed(2);
  },

  errorAlert(value) {
    return isNaN(value) || value == "";
  },
};
