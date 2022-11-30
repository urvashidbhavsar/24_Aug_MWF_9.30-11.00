function form_valid() {
  // password
  let pwd = document.form1.pass.value;
  let cpwd = document.form1.cpass.value;
  if (pwd == "") {
    document.getElementById("pass_msg").innerHTML = "Enter Password";
    return false;
  }
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (pass.value.match(decimal)) {
    return true;
  } else {
    document.getElementById("pass_msg").innerHTML =
      "password entered between 8 to 15 characters";

    return false;
  }
  if (cpwd != pwd) {
    document.getElementById("pass_msg").innerHTML =
      "password and confirm password does not match";
    return false;
  }
}
