const apiKey = '432484c0312155bef93e49348c770866';  

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    if (data.cod === '404') {
        weatherResult.innerHTML = `<p>City not found</p>`;
        return;
    }

    const { name, main, weather } = data;
    weatherResult.innerHTML = `
    <h2>${name}</h2>
    <p>${weather[0].description}</p>
    <p>Temperature: ${main.temp} °C</p>
    <p>Humidity: ${main.humidity}%</p>
    <p>Pressure: ${main.pressure} hPa</p>
  `;
}
