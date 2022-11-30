function form_valid() {
  let mobile = document.form1.mno.value;
  if (mobile == "") {
    document.getElementById("msg_mno").innerHTML = "Enter Mobile no";
    return false;
  } else if (isNaN(mobile)) {
    document.getElementById("msg_mno").innerHTML = "you entered alphabets";
    return false;
  } else if (mobile.length < 10) {
    document.getElementById("msg_mno").innerHTML =
      "Mobile No is less then 10 digits";
    return false;
  }
  //   else if (mobile.length > 10) {
  //     document.getElementById("msg_mno").innerHTML =
  //       "Mobile No is more then 10 digits";
  //     return false;
  //   }


//   copy email regular expression from w3resource.com
// type in url -> email regular expression in javascript
type
  let mail = document.form1.mail.value;
  if (mail == "") {
    document.getElementById("msg_email").innerHTML = "Enter Email";
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    document.getElementById("msg_email").innerHTML = "wrong";
    return false;
  } else {
    return true;
  }
}

function check_pass(){
  let pass = document.getElementById("pass");
  if(pass.type =="password"){
    pass.type = "text";
  }
  else{
    pass.type = "password";
  }
}
