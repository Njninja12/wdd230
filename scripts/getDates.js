

document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

document.getElementById("year").innerHTML = new Date().getFullYear()


const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});


const modeButton = document.querySelector('#mode');
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes ("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});