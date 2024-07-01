/*html*/
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="weather-app">
        <h1>Weather App</h1>
        <input type="text" id="city" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
        <div id="weather-result"></div>
    </div>
    <script src="app.js"></script>
</body>

</html>
/*css*/
body {
    font-family: Arial, sans-serif;
    background-color: #363333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  
.weather-app {
    background: rgb(224, 191, 191);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2 2 10px rgb(245, 241, 241);
    text-align: center;
  }
  
#weather-result {
    margin-top: 20px;
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 10px;
  }
button{
background-color: black; 
color: white;
padding: 10px;
border: none;
border-radius: 5px;
font-size: 20px;

  }
  #city{
    padding: 10px;
    font-size: 20px;
  }
  /*javascript*/
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

