const temerature = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const condition = document.querySelector('#condition');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.41519&lon=-111.83118&units=imperial&appid=928e4140fd1ab203c9fde97729952bd5'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  function displayResults(data) {
    temperature.innerHTML = data.main.temp.toFixed(0);
    let desc = data.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('alt', desc);
    condition.textContent = `${desc}`;
}




  apiFetch();