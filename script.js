'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
  });
}

btnCloseModal.addEventListener("click", function(){
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
})
