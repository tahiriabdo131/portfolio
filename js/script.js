const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".actions");
const lines = document.querySelectorAll(".line");
const x_mark = document.querySelector(".x-mark");

window.addEventListener('resize', function () {
    if (window.innerWidth > 991)
        menu.style.display = "block";
    else
        menu.style.display = "none";
});

hamburger.addEventListener("click", function () {
    if (menu.style.display === "block")
        hiddeMenu();
    else
        showMenu();
});

function hiddeMenu() {
    if (window.innerWidth <= 991) {
        menu.style.display = "none";
        x_mark.style.display = "none";
        Array.from(lines).forEach(line => line.style.display = "block");
    }
}

function showMenu() {
    menu.style.display = "block";
    x_mark.style.display = "block";
    Array.from(lines).forEach(line => line.style.display = "none");
}

var text = "I'm a Full-Stack Developer.";
var i = 0, speed = 80;
var textElement = document.getElementById("write-text");
var textElement2 = document.getElementById("write-text-span");

function typeWriter() {
    if (i < text.length) {
        let color = "#3e3f43";
        if (i > 5 && i < 16) color = "#13778b";
        textElement.innerHTML += `<span style="color: ${color}">${text.charAt(i)}</span>`;
        setTimeout(typeWriter, speed);
        i++;
    }
}

typeWriter();
