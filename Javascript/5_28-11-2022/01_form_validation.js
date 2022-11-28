function form_valid() {
  let fname = document.form1.fname.value;
  if (fname == "" || fname == null) {
    // alert("enter name");
    document.getElementById("fname_msg").innerHTML = "Enter name";
    return false;
  } else if (!isNaN(fname)) {
    document.getElementById("fname_msg").innerHTML = "Enter alphabet only";
    return false;
  }

  //   validation for radio button
  //   here 0 and 1 is a index number

  //    && - and operator check both value
  let male = document.form1.gen[0].checked;
  let female = document.form1.gen[1].checked;

  if (male == false && female == false) {
    document.getElementById("gender_msg").innerHTML = "select gender";
    return false;
  }

  //   validation for checkbox
  let sub1 = document.form1.sub1.checked;
  let sub2 = document.form1.sub2.checked;
  let sub3 = document.form1.sub3.checked;

  if (sub1 == false && sub2 == false && sub3 == false) {
    document.getElementById("sub_msg").innerHTML = "select subject";
    return false;
  }

  //   validation for dropdown
  let city = document.form1.city.value;

  if (city == -1) {
    document.getElementById("city_msg").innerHTML = "select city";
    return false;
  }
}
