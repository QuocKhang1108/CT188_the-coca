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
  togglePasswordVisibility(passwordConfirmInput, togglePasswordConfirm);
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
      const email = emailInput.value;
      const password = passwordInput.value;

      if (!isEmailUsed(email)) {
        const user = { email, password };
        saveUser(email, user);
        alert("Đăng kí thành công!");
        window.location.href = "log_in.html";
      } else {
        alert("Địa chỉ email đã được sử dụng!");
      }
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
    const firstNameValue = firstNameInput.value.trim();
    const firstNameRegex = /^[a-zA-Z]+$/;

    return validateInput(
      firstNameInput,
      "First Name is required",
      firstNameRegex.test(firstNameValue)
    );
  }

  function validateLastName() {
    const lastNameValue = lastNameInput.value.trim();
    const lastNameRegex = /^[a-zA-Z]+$/;

    return validateInput(
      lastNameInput,
      "Last Name is required",
      lastNameRegex.test(lastNameValue)
    );
  }

  function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      return showError(emailInput, "Email is required!");
    } else if (!isValidEmail(emailValue)) {
      return showError(
        emailInput,
        'Email only contain letters (both uppercase and lowercase), numbers, dots, underscores, and hyphens! "example.1-1_1@email.com"'
      );
    } else {
      return showSuccess(emailInput);
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function validatePassword() {
    const passwordValue = passwordInput.value.trim();
    // password: ít nhất 8 ký tự, chứa ít nhất một chữ cái và một chữ số
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return validateInput(
      passwordInput,
      "Password has at least 8 characters, contains at least one letter and one number",
      passwordRegex.test(passwordValue)
    );
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

  function validateInput(input, message, isValid) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector("span.error-message");

    if (!isValid) {
      formControl.classList.remove("success");
      formControl.classList.add("error");
      errorElement.innerText = message;
      errorElement.style.color = "white";
      return false;
    } else {
      formControl.classList.remove("error");
      formControl.classList.add("success");
      errorElement.innerText = "";
      return true;
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

  function hideErrorMessage(event) {
    const input = event.target;
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.remove("success");
    const errorElement = formControl.querySelector("span.error-message");
    errorElement.innerText = "";
  }

  function isEmailUsed(email) {
    const storedUser = localStorage.getItem(email);
    return !!storedUser;
  }

  function saveUser(email, user) {
    localStorage.setItem(email, JSON.stringify(user));
  }
});
