const element = document.getElementsByClassName("button-register");

function irNextPage() {
  document.querySelector('.button-left').addEventListener('click', function() {
   document.querySelector('.page-1').classList.add('page-1-hidden');
   document.querySelector('.page-2').classList.add('page-2-visible');
     window.location = "index2.html";
});

}

function registerPage() {
  window.location = "index.html";
}
