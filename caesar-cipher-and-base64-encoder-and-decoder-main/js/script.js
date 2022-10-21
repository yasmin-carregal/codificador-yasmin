// Shows Shift / Key option if Caesar Cipher encoder is selected

var divChave = document.querySelector(".divChave");
var selecaoCod = document.addEventListener("click", function () {
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar") {
    divChave.style.display = "block";
  } else {
    divChave.style.display = "none";
  }
});

// Switch 

var radio = document.querySelectorAll(".radio");
var botao = document.getElementById("botaoResultado");
var mensagem = document.getElementById("mensagem");
var chave = document.getElementById("chave");
var resultado = document.getElementById("resultado");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar" && radio[0].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = codificarCesar(valorMsg, valorChave);
  } else if (codigo == "cesar" && radio[1].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = decodificarCesar(valorMsg, valorChave);

// Base64 encoder and decoder
  } else if (codigo == "base64" && radio[0].checked) {
    var valorMsg = mensagem.value;
    resultado.value = btoa(valorMsg);
  } else {
    var valorMsg = mensagem.value;
    resultado.value = atob(valorMsg);
  }
});

// Caesar Cipher encoder

function codificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        return String.fromCharCode(((entrada - 65 + chave) % 26) + 65);
      } else if (entrada >= 97 && entrada <= 122) {
        return String.fromCharCode(((entrada - 97 + chave) % 26) + 97);
      } else {
        return str;
      }
    })
    .join("");
}

// Caesar Cipher decoder

function decodificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        if (entrada - 65 - chave < 0) {
          return String.fromCharCode(((entrada - 65 - chave + 26) % 26) + 65);
        } else {
          return String.fromCharCode(((entrada - 65 - chave) % 26) + 65);
        }
      } else if (entrada >= 97 && entrada <= 122) {
        if (entrada - 97 - chave < 0) {
          return String.fromCharCode(((entrada - 97 - chave + 26) % 26) + 97);
        } else {
          return String.fromCharCode(((entrada - 97 - chave) % 26) + 97);
        }
      } else {
        return str;
      }
    })
    .join("");
}

// Switch button's text
radio[0].addEventListener("click", function () {
  if (radio[0].checked) {
    botao.style.display = 'block';
    botao.innerText = 'Encode';
  }
});

radio[1].addEventListener("click", function () {
  if (radio[1].checked) {
    botao.style.display = 'block';
    botao.innerText = 'Decode';
  }
});
