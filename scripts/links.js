const baseURL = 'https://njninja12.github.io/wdd230/'; // Replace with your GitHub Pages URL
const linksURL = 'data/links.json';

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Test the JSON result
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Fetch operation failed:', error);
    }
}

function displayLinks(weeks) {
    const learningActivitiesSection = document.querySelector('section.card ul');
    learningActivitiesSection.innerHTML = ''; // Clear any existing content

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            weekItem.appendChild(anchor);

            if (index < week.links.length - 1) {
                weekItem.appendChild(document.createTextNode(' ')); // Add space between links
            }
        });

        learningActivitiesSection.appendChild(weekItem);
    });
}

// Call the function to fetch and display links
getLinks();
