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

const trapFocus = function (event) {
  if (event.key === "Tab") {
    event.preventDefault();
    event.stopPropagation();
    let nextFocusCanBeTaken = false;
    let nextFocusableElement = null;
    console.log(modalElement.children);
    for (let node of modalElement.children) {
      if (event.target === node) {
        nextFocusCanBeTaken = true;
        nextFocusableElement = node;
      } else if (nextFocusCanBeTaken) {
        if (node.getAttribute("data-focusable")) {
          console.log("here", node);
          nextFocusableElement = node;
          break;
        }
      }
    }
    nextFocusableElement.focus();
  }
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
modalElement.addEventListener("keydown", trapFocus);
overlayElement.addEventListener("click", closeModal);
document.addEventListener("keydown", handleEscapeKey);
