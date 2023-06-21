const telefoneInput = document.getElementById('item-8');

telefoneInput.addEventListener('input', function() {
  // Remove todos os caracteres não numéricos
  telefoneInput.value = telefoneInput.value.replace(/\D/g, '');
});

// function toggleContent() {
//     var element = document.getElementById("tudo");
//     if (element.style.display === "none") {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   }


function toggleContent() {
    var div1 = document.getElementById("tudo");
    var div2 = document.getElementById("tudo-2");
  
    if (div1.style.display === "block") {
      div1.style.display = "none";
      div2.style.display = "block";
    } else {
      div1.style.display = "none";
      div2.style.display = "block";
    }
  }