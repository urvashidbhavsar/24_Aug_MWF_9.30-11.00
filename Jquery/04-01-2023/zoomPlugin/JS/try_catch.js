try {
  fetch(
    new Request(
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      { method: "HEAD", mode: "no-cors" }
    )
  )
    .then(function (response) {
      return true;
    })
    .catch(function (e) {
      var carbonScript = document.createElement("script");
      carbonScript.src =
        "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
      carbonScript.id = "_carbonads_js";
      document.getElementById("carbon-block").appendChild(carbonScript);
    });
} catch (error) {
  console.log(error);
}
