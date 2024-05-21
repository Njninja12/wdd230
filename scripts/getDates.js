

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

function updateVisitCount() {
    // Check if 'visitCount' is stored in localStorage
    if (localStorage.getItem('visitCount')) {
        // Retrieve the current count from localStorage
        let count = parseInt(localStorage.getItem('visitCount'));
        // Update the display on the page
        document.getElementById('visitCount').textContent = count;
        // Increment the count and save it back to localStorage
        localStorage.setItem('visitCount', count + 1);
    } else {
        // If 'visitCount' is not in localStorage (first visit), initialize it to 1
        localStorage.setItem('visitCount', 1);
        document.getElementById('visitCount').textContent = 1;
    }
}

document.addEventListener('DOMContentLoaded', updateVisitCount);

function checkPassword(input) {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        password.setCustomValidity("Passwords don't match");
    } else {
        confirmPassword.setCustomValidity('');
        password.setCustomValidity('');
    }
}

// JavaScript for updating range value display
function updateRating(input) {
    document.getElementById('ratingDisplay').textContent = input.value;
}

