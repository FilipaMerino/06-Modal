'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")

const btns = document.querySelectorAll(".show-modal");

let btnsOpenModal = []

for (let i = 0; i < btns.length; i++){
  btnsOpenModal.push(btns[i].textContent);
}
