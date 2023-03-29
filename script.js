const element = document.getElementsByClassName("button-register");

function irNextPage() {
  window.location = "index2.html";
  document.querySelector('.button-left').addEventListener('click', function() {
   document.querySelector('.page-1').classList.add('page-1-hidden');
   document.querySelector('.page-2').classList.add('page-2-visible');
});

}

function registerPage() {
  window.location = "index.html";
}
