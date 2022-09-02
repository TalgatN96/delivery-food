const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toglleModal);

close.addEventListener("click", toglleModal);

function toglleModal() {
  modal.classList.toggle("is-open");
}

new WOW().init();
