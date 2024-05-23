// Declare a const variable named "url" that contains the URL string of the JSON resource provided
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a const variable named "cards" that selects the HTML div element from the document with an id value of "cards"
const cards = document.querySelector('#cards');

// Create an async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets); // temporary testing of data retrieval
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

// Call the function getProphetData() in the main line of your .js code to test the fetch and response
getProphetData();

// Define a function expression named "displayProphets" that handles a single parameter named "prophets"
const displayProphets = (prophets) => {
  // Use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Add the section card to the "cards" div
    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}