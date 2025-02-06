"use strict";

const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");

const closeModal = function () {
  modalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
};

const openModal = function () {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
};

const modalTriggerButtons = document.querySelectorAll(".show-modal");
modalTriggerButtons.forEach((button) =>
  button.addEventListener("click", openModal)
);

closeModalButton.addEventListener("click", closeModal);
