// An/hien password
const togglePasswordVisibility = (inputElement, toggleElement) => {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    toggleElement.innerHTML = '<i class="fa fa-eye"></i>';
  } else {
    inputElement.type = "password";
    toggleElement.innerHTML = '<i class="fa fa-eye-slash"></i>';
  }
};

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const passwordConfirmInput = document.getElementById("passwordConfirm");
const togglePasswordConfirm = document.getElementById("togglePasswordConfirm");

togglePassword.addEventListener("click", () => {
  togglePasswordVisibility(passwordInput, togglePassword);
});

togglePasswordConfirm.addEventListener("click", () => {
  togglePasswordVisibility(passwordConfirm, togglePasswordConfirm);
});

// xu li dang nhap

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const firstNameInput = document.getElementById("firstname");
  const lastNameInput = document.getElementById("lastname");
  const emailInput = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      saveCredentials({
        email: emailInput.value,
        password: passwordInput.value,
      });

      alert("Đăng kí thành công!");
    } else {
      console.log("Form is not valid"); // In ra console để theo dõi
    }
  });

  firstNameInput.addEventListener("blur", validateFirstName);
  lastNameInput.addEventListener("blur", validateLastName);
  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);
  passwordConfirmInput.addEventListener("blur", validatePasswordConfirm);

  firstNameInput.addEventListener("focus", hideErrorMessage);
  lastNameInput.addEventListener("focus", hideErrorMessage);
  emailInput.addEventListener("focus", hideErrorMessage);
  passwordInput.addEventListener("focus", hideErrorMessage);
  passwordConfirmInput.addEventListener("focus", hideErrorMessage);

  function validateForm() {
    return (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validatePassword() &&
      validatePasswordConfirm()
    );
  }

  function validateFirstName() {
    return validateInput(firstNameInput, "First Name is required!");
  }

  function validateLastName() {
    return validateInput(lastNameInput, "Last Name is required!");
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      return showError(emailInput, "Email is required!");
    } else if (!isValidEmail(emailValue)) {
      return showError(emailInput, "Invalid email format!");
    } else {
      return showSuccess(emailInput);
    }
  }

  function validatePassword() {
    return validateInput(passwordInput, "Password is required!");
  }

  function validatePasswordConfirm() {
    const passwordValue = passwordInput.value.trim();
    const passwordConfirmValue = passwordConfirmInput.value.trim();

    if (passwordConfirmValue === "") {
      return showError(passwordConfirmInput, "Confirm Password is required!");
    } else if (passwordValue !== passwordConfirmValue) {
      return showError(passwordConfirmInput, "Passwords do not match!");
    } else {
      return showSuccess(passwordConfirmInput);
    }
  }

  function validateInput(input, message) {
    const inputValue = input.value.trim();
    if (inputValue === "") {
      return showError(input, message);
    } else {
      return showSuccess(input);
    }
  }

  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove("success");
    formControl.classList.add("error");
    const errorElement = formControl.querySelector("span.error-message");
    errorElement.innerText = message;
    errorElement.style.color = "white";
    return false;
  }

  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("success");
    const errorElement = formControl.querySelector("span.error-message");
    errorElement.innerText = "";
    return true;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function hideErrorMessage(event) {
    const input = event.target;
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.remove("success");
    const errorElement = formControl.querySelector("span.error-message");
    errorElement.innerText = "";
  }

  function saveCredentials(credentials) {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(credentials);
    localStorage.setItem("users", JSON.stringify(savedUsers));
  }
});
