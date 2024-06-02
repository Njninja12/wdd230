document.addEventListener("DOMContentLoaded", function() {
    // Check for localStorage support and display visit message
    if (typeof(Storage) !== "undefined") {
        let lastVisit = localStorage.getItem("lastVisit");
        let now = new Date().getTime();

        if (!lastVisit) {
            let visitMessageElement = document.getElementById("visitMessage");
            if (visitMessageElement) {
                visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
            }
        } else {
            lastVisit = parseInt(lastVisit);
            let daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
            let visitMessageElement = document.getElementById("visitMessage");
            if (visitMessageElement) {
                if (daysSinceLastVisit < 1) {
                    visitMessageElement.textContent = "Back so soon! Awesome!";
                } else {
                    let message = (daysSinceLastVisit === 1) ? "day" : "days";
                    visitMessageElement.textContent = `You last visited ${daysSinceLastVisit} ${message} ago.`;
                }
            }
        }

        localStorage.setItem("lastVisit", now.toString());
    } else {
        console.log("LocalStorage not supported.");
    }

    // Set last modified date
    let lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = "Last Modification: " + document.lastModified;
    }

    // Set timestamp
    let timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        timestampElement.value = new Date().toISOString();
    }

    // Fetch weather data
    fetchWeatherData();

    // Display member spotlights
    displayMemberSpotlights();

    // Show banner if applicable
    showEventBanner();
});

function fetchWeatherData() {
    const apiKey = '928e4140fd1ab203c9fde97729952bd5';
    const city = 'Phoenix';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const currentTemp = data.list[0].main.temp;
            const weatherDescription = data.list[0].weather[0].description;
            
            // Collecting data for the next 3 days (24 data points)
            let forecast = [];
            for (let i = 0; i < 24; i += 8) {
                forecast.push(data.list[i].main.temp);
            }

            let weatherElement = document.querySelector('.weather');
            if (weatherElement) {
                weatherElement.innerHTML = `
                    <h2>Local Weather</h2>
                    <p>Current Temperature: ${currentTemp}°F</p>
                    <p>Weather: ${weatherDescription}</p>
                    <p>3-Day Forecast: ${forecast.join('°F, ')}°F</p>
                `;
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayMemberSpotlights() {
    console.log('Fetching members data...');
    fetch('data/members.json') // Update the path to reflect the folder structure
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(members => {
            console.log('Fetched members:', members); // Log the fetched data for debugging
            const qualifiedMembers = members.filter(member => member.membershipLevel === 'silver' || member.membershipLevel === 'gold');
            const randomMembers = shuffleArray(qualifiedMembers).slice(0, 3);

            let spotlightsContainer = document.querySelector('.spotlights');
            if (spotlightsContainer) {
                spotlightsContainer.innerHTML = '<h2>Member Spotlights</h2>';
                randomMembers.forEach(member => {
                    spotlightsContainer.innerHTML += `
                        <div class="spotlight">
                            <h3>${member.name}</h3>
                            <p>${member.description}</p>
                        </div>
                    `;
                });
            } else {
                console.error("Spotlights container not found.");
            }
        })
        .catch(error => console.error('Error fetching members data:', error));
}

function showEventBanner() {
    const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    if (today === 1 || today === 2 || today === 3) { // Monday to Wednesday
        const banner = document.createElement('div');
        banner.className = 'event-banner';
        banner.innerHTML = `
            <p>Join us for a meet and greet on Wednesday at 7:00 p.m.</p>
            <button class="close-banner" onclick="this.parentElement.style.display='none'">❌</button>
        `;
        document.body.prepend(banner);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
