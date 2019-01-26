function loginToAdmin() {
  var login = document.getElementById("login");
  var password = document.getElementById("password");

  if (login.value == "admin" && password.value == "admin") {
    Utils.changeHTML("./adminPage.html");
  } else {
    login.className += " is-danger";
    password.className += " is-danger";
  }
}
