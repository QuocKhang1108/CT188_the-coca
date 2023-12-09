// an/hien password
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

//Kiem tra dang nhap
function login(e) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(email);
  var data = JSON.parse(user);
  //   console.log(email);
  //   console.log(password);
  //   console.log(user);
  //   console.log(data);
  if (user == null) {
    alert("Đăng nhập thất bại, email/password sai! Vui lòng nhập lại.");
  } else if (email == data.email && password == data.password) {
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
  } else {
    alert("Đăng nhập thất bại, email/password sai! Vui lòng nhập lại.");
  }
}
