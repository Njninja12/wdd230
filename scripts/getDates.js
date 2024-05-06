

document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

document.getElementById("year").innerHTML = new Date().getFullYear()


const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});
    