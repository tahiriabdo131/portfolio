const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".actions");
const lines = document.querySelectorAll(".line");
const x_mark = document.querySelector(".x-mark");

hamburger.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
        x_mark.style.display = "none";
        Array.from(lines).forEach(line => line.style.display = "block");
    }
    else {
        menu.style.display = "block";
        x_mark.style.display = "block";
        Array.from(lines).forEach(line => line.style.display = "none");
    }
});
