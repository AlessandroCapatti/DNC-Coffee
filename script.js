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

/* MODAL 2 */

var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("open-modal2-btn");
var span2 = document.getElementById("close-modal2");

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


