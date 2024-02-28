const inputs = document.querySelectorAll("input");
const types = ["name", "email", "phone", "name"];

inputs.forEach((input, index) => {
  input.addEventListener("keyup", function (event) {
    const value = event.target.value;

    showError(event.target, types[index], value);
  });
});

function showError(input, type, value) {
  const regExpName = /^([a-z]|[A-Z])\w{3,50}$/;
  const regExpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regExpPhone =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  switch (type) {
    case "name":
      if (!regExpName.test(value)) {
        input.parentElement.classList.add("invalid");
      } else {
        input.parentElement.classList.remove("invalid");
      }
      break;

    case "email":
      if (!regExpEmail.test(value)) {
        input.parentElement.classList.add("invalid");
      } else {
        input.parentElement.classList.remove("invalid");
      }
      break;

    case "phone":
      if (!regExpPhone.test(value)) {
        input.parentElement.classList.add("invalid");
      } else {
        input.parentElement.classList.remove("invalid");
      }
      break;

    default:
      break;
  }
}
