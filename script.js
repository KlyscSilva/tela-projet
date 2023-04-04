const button = document.querySelector("button-register");
const form = document.getElementsByClassName("input-form");
const form2 = document.getElementsByClassName("form-login");

// Criando efeito para o cadeado de mostra e ocultar senha
const passwordInput = document.getElementById("password")
const eyeSvg = document.getElementById("eyeSvg")



function eyeClick(){

let inputTypePassWord = passwordInput.type === "password"

if(inputTypePassWord){

showPassword()

}else{
  hidePassword()
}

// Criando funções para aplicar as regras

function showPassword(){

  passwordInput.setAttribute("type", "text")
  eyeSvg.setAttribute("src","assets/closed.png")

}

function hidePassword(){

  passwordInput.setAttribute("type","password")
  eyeSvg.setAttribute("src","assets/open.png")
}

}

// Fim das regras das funções de habilitar e desabilitar view de senha

//Script de pular pagina
function irNextPage() {
  document.querySelector(".button-left").addEventListener("click", function () {
    window.location = "index.html";
  });

  // Adicione a classe de animação à página atual
  document.querySelector("body").classList.add("transition-right");

  // Espere a animação terminar antes de redirecionar para a página 2
  setTimeout(function () {
    window.location.href = "index.html";
  }, 1000); // 1000ms = 1 segundo
}

function registerPage() {
  // Adicione a classe de animação à página atual
  document.querySelector("body").classList.add("transition-left");

  // Espere a animação terminar antes de redirecionar para a página 1
  setTimeout(function () {
    window.location.href = "../Create-account/index.html";
  }, 1000); // 1000ms = 1 segundo
}
// Fim do Script Pular Pagina

// Criando eventos com função de submit e criando as variaveis para serem inseridas na função para o processo de validação
form.addEventListener("submit", function (event) {
  
  // validando tela de login

  const emailLogin = form2.elements["emailLogin"];
  const passwordLogin = form2.elements["passwordLogin"];

  if (!emailLogin.checkValidity()) {
    alert("Email Inválido");
    event.preventDefault();
  }

  if (!validarSenha(passwordLogin.value)) {
    alert("Senha inválida");
    event.preventDefault();
  }

  function validarSenha(passwordLogin) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return regex.test(passwordLogin);
  }

  function checkValidity(emailLogin) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailLogin);
  }

  // FIM DA VALIDACAO

  // validando tela de cadastro
  const nomeInput = form.elements["name"];
  const sobreNomeInput = form.elements["last-name"];
  const emailInput = form.elements["email"];
  const senhaInput = form.elements["password"];

  if (!validarNome(nomeInput.value)) {
    alert("Nome Inválido");
    event.preventDefault();
  }

  if (!validarNome(sobreNomeInput.value)) {
    alert("Sobrenome Inválido");
    event.preventDefault();
  }

  if (!emailInput.checkValidity()) {
    alert("Email Inválido");
    event.preventDefault();
  }

  if (!validarSenha(senhaInput.value)) {
    alert("Senha inválida");
    event.preventDefault();
  }
});

function validarNome(name) {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

function validarSenha(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

function checkValidity(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// FIM DA VALIDACAO
