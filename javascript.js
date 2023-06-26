document.getElementById("linkSobre").addEventListener("click", function() {
  event.preventDefault();
  window.location.href = "sobre.html";
});


document.getElementById("linkContato").addEventListener("click", function() {
  event.preventDefault();
  window.location.href = "contato.html";
});


var btnSaibaMais = document.getElementsByClassName("btn-saiba-mais");

for (var i = 0; i < btnSaibaMais.length; i++) {
  btnSaibaMais[i].addEventListener("click", function(event) {
    event.preventDefault();
    var whatsappLink = "https://api.whatsapp.com/send?phone=5547997360339";
    window.open(whatsappLink, "_blank");
  });
}