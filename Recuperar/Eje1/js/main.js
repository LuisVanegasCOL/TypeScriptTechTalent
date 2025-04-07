"use strict";
// ts/main.ts
window.addEventListener("DOMContentLoaded", () => {
    const nameHeading = document.querySelector("h1");
    if (nameHeading) {
        nameHeading.addEventListener("mouseover", () => {
            nameHeading.classList.add("text-success");
        });
        nameHeading.addEventListener("mouseout", () => {
            nameHeading.classList.remove("text-success");
        });
    }
});
