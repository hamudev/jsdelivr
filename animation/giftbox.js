const button = document.getElementById('buttonkupon');
const box = document.getElementById('boxkupon');

let open = false;

button.addEventListener('click', (event) => {
  box.classList.toggle('open');
  event.target.innerText = (open ? 'Open' : 'Close' );
  open = !open;
});
