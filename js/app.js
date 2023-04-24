setTimeout(function () {
  //   document.getElementById("articulo").style.display = "none";
  //   document.getElementById("publicidad").style.display = "block";

  document.getElementById("publicidad").style.display = "block";
  console.log("funcionabien");
}, 4000);

document
  .getElementById("cerrarPublicidad")
  .addEventListener("click", function () {
    document.getElementById("publicidad").style.display = "none";
  });
