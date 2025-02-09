"use strict";

const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".close-modal");
let modalTriggeringElement = null;

const closeModal = function () {
  modalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
  modalTriggeringElement?.focus();
};

const openModal = function (event) {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
  modalTriggeringElement = event.target;
  closeModalButton.focus();
};

const modalTriggerButtons = document.querySelectorAll(".show-modal");
modalTriggerButtons.forEach((button) =>
  button.addEventListener("click", openModal)
);

const handleEscapeKey = function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
};

closeModalButton.addEventListener("click", closeModal);
overlayElement.addEventListener("click", closeModal);
document.addEventListener("keydown", handleEscapeKey);
