function hide_show() {
  let pass = document.getElementById("sec");
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
