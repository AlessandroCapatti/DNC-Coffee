 
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

function showModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}




