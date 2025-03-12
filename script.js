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

let modalChildren;

const openModal = function (event) {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
  modalTriggeringElement = event.target;
  modalChildren = [...modalElement.children];
  closeModalButton.focus();
};

const trapFocus = function (event) {
  event.preventDefault();
  let nextFocusableElement;
  let index = modalChildren.findIndex((ele) => ele === event.target);
  if (event.shiftKey && event.key === "Tab") {
    if (!event.target.previousElementSibling) {
      nextFocusableElement = modalChildren.findLast(
        (ele) => ele.dataset.focusable
      );
    } else {
      nextFocusableElement = modalChildren.findLast(
        (ele, idx) => ele.dataset.focusable && idx < index
      );
    }
  } else if (event.key === "Tab") {
    nextFocusableElement = modalChildren.find(
      (ele, idx) => ele.dataset.focusable && idx > index
    );
    if (!nextFocusableElement) {
      nextFocusableElement = modalChildren.find((ele) => ele.dataset.focusable);
    }
  }
  nextFocusableElement?.focus();
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

const handleKey = function (event) {
  if (event.key === "Enter") {
    closeModal();
  }
};

closeModalButton.addEventListener("click", closeModal);
closeModalButton.addEventListener("keydown", handleKey);
modalElement.addEventListener("keydown", trapFocus);
overlayElement.addEventListener("click", closeModal);
document.addEventListener("keydown", handleEscapeKey);
