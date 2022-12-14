function check_form_validation() {
  let fname = document.form1.fname.value;
  if (fname == "") {
    document.getElementById("fmsg").innerHTML = "Enter first name";
    return false;
  } else if (!isNaN(fname)) {
    document.getElementById("fmsg").innerHTML = "Enter alphabets only";
    return false;
  }
  let mname = document.form1.mname.value;
  if (mname == "") {
    document.getElementById("mmsg").innerHTML = "Enter middle name";
    return false;
  } else if (!isNaN(mname)) {
    document.getElementById("mmsg").innerHTML = "Enter alphabets only";
    return false;
  }
  let lname = document.form1.lname.value;
  if (lname == "") {
    document.getElementById("lmsg").innerHTML = "Enter Last name";
    return false;
  } else if (!isNaN(lname)) {
    document.getElementById("lmsg").innerHTML = "Enter alphabets only";
    return false;
  }

  let mail = document.form1.mail.value;
  if (mail == "") {
    document.getElementById("mail_msg").innerHTML = "Enter Email";
    return false;
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    document.getElementById("mail_msg").innerHTML = "Enter Email properly";
    return false;
  }

  //   password
  let sec = document.form1.security.value;
  if (sec == "") {
    document.getElementById("pmsg").innerHTML = "Enter password";
    return false;
  } else if (sec.length < 8) {
    document.getElementById("pmsg").innerHTML = "Enter only 8 characters";
    return false;
  } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{0,8}$/) {
    document.getElementById("pmsg").innerHTML =
      "only 8 characters which contain at least one numeric digit and a special character";
    return false;
  }
}
