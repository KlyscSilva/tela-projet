const button = document.querySelector("button-register")

//function irNextPage() {
  //window.location = "index2.html";
//}

//function registerPage() {
  //window.location = "index.html";
//}


function irNextPage() {
<<<<<<< HEAD
  document.querySelector('.button-left').addEventListener('click', function() {
   document.querySelector('.page-1').classList.add('page-1-hidden');
   document.querySelector('.page-2').classList.add('page-2-visible');
     window.location = "index2.html";
});

=======
  // Adicione a classe de animação à página atual
  document.querySelector("body").classList.add('transition-right');
  
  // Espere a animação terminar antes de redirecionar para a página 2
  setTimeout(function() {
    window.location = 'index2.html';
  }, 1000); // 1000ms = 1 segundo
>>>>>>> 05e55c6 (Co-authored-by: Mikaa Pereira  <mikasampaio@users.noreply.github.com>)
}


function registerPage() {
  // Adicione a classe de animação à página atual
  document.querySelector("body").classList.add('transition-left');
  
  // Espere a animação terminar antes de redirecionar para a página 1
  setTimeout(function() {
    window.location = 'index.html';
  },1000); // 1000ms = 1 segundo
}


