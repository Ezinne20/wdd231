const apiKey = 'b5939e8de775aef48a0ebca52732f954';
const city = 'Lagos, Nigeria';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather data not found');
        const data = await response.json();

        document.getElementById('temperature').textContent = Math.round(data.main.temp);
        document.getElementById('weather-description').textContent = data.weather[0].description;
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

getWeather();
