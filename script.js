const button = document.querySelector("button-register")
const form = document.getElementsByClassName("input-form")

//function irNextPage() {
  //window.location = "index2.html";
//}

//function registerPage() {
  //window.location = "index.html";
//}


function irNextPage() {

  document.querySelector('.button-left').addEventListener('click', function() {
  window.location = "index2.html";
});

  // Adicione a classe de animação à página atual
  document.querySelector("body").classList.add('transition-right');
  
  // Espere a animação terminar antes de redirecionar para a página 2
  setTimeout(function() {
    window.location.href = 'index2.html';
  }, 1000); // 1000ms = 1 segundo

}


function registerPage() {
  // Adicione a classe de animação à página atual
  document.querySelector("body").classList.add('transition-left');
  
  // Espere a animação terminar antes de redirecionar para a página 1
  setTimeout(function() {
    window.location.href = '../Create-account/index.html';
  },1000); // 1000ms = 1 segundo
}





// Criando eventos com função de submit
form.addEventListener("submit",function(event){

const nomeInput = form.elements["name"]
const sobreNomeInput = form.elements["last-name"]
const emailInput = form.elements["email"]
const senhaInput = form.elements["passowrd"]



if (!validarNome(nomeInput.value)) {
  alert("Nome Inválido")
  event.preventDefault();
}

if(!validarNome(sobreNomeInput.value)){
  alert("Sobrenome Inválido")
  event.preventDefault();
}

if(!emailInput.checkValidity()){
  alert("Email Inválido")
  event.preventDefault()
}

if (!validarSenha(senhaInput.value)) {
  alert('Senha inválida');
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
