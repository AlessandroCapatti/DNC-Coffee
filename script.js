 /* CARDS */
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.botao');

cards.forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    buttons[index].style.visibility = 'visible';
  });
  card.addEventListener('mouseleave', () => {
    buttons[index].style.visibility = 'hidden';
  });
});

/* MODAL */

var modal = document.getElementById("modal");
var btn = document.getElementById("open-modal-btn");
var span = document.getElementById("close-modal");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



