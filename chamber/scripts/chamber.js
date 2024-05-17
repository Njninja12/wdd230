
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function() {
    // Check for localStorage support
    if (typeof(Storage) !== "undefined") {
        // Get last visit timestamp from localStorage
        let lastVisit = localStorage.getItem("lastVisit");
 
        // Current timestamp
        let now = new Date().getTime();

        // Display visit message based on last visit
        if (!lastVisit) {
            document.getElementById("visitMessage").textContent = "Welcome! Let us know if you have any questions.";
        } else {
            lastVisit = parseInt(lastVisit);
            let daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

            if (daysSinceLastVisit < 1) {
                document.getElementById("visitMessage").textContent = "Back so soon! Awesome!";
            } else {
                let message = (daysSinceLastVisit === 1) ? "day" : "days";
                document.getElementById("visitMessage").textContent = `You last visited ${daysSinceLastVisit} ${message} ago.`;
            }
        }

        // Save current visit timestamp in localStorage
        localStorage.setItem("lastVisit", now.toString());
    } else {
        // LocalStorage not supported
        console.log("LocalStorage not supported.");
    }
});