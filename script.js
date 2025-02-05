"use strict";

const openModal = function () {
  document.querySelector(".modal").classList.remove("hidden");
};
const modalTriggerButtons = document.querySelectorAll(".show-modal");
modalTriggerButtons.forEach((button) =>
  button.addEventListener("click", openModal)
);
