//function to fetch the weather data
const getWeather = function () {
    const apiKey = 'cf8b8dec9c2511e21a9bc0063bd7a213';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const foreCastUrl = `https:api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    //fetch cuurent weather url
    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching current weather data:', error);
        alert('Error fetching current weather data. Please try again.');
    });

    //fetch forecast url
    fetch(foreCastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch(error => {
        console.error('Error fetching hourly forecast data:', error);
        alert('Error fetching hourly forecast data. Please try again.');
    });
}

// function to display the weather data 
const displayWeather = function(data) {
    // select elements
    const temp = document.querySelector('.temp');
    const weatherInfo = document.querySelector('.weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecast = document.querySelector('.hourly-forecast');

    // clear previous contents
    weatherInfo.innerHTML = "";
    hourlyForecast.innerHTML = "";
    temp.innerHTML = "";

    if (data.cod === '404') {
        weatherInfo.innerHTML = `<p>${data.message}</p>`; //if an error occurs
    } else {
        const cityName = data.name; //
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const tempHTML = `<p>${temperature}°C</p>`;
        const weatherHTML = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;

        temp.innerHTML = tempHTML;
        weatherInfo.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

// function to display hourly forecast
const displayHourlyForecast = function (hourlyData) {
    const hourlyForecast = document.querySelector('.hourly-forecast');
    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly weather Icon">
            <span>${temperature}°C</span>
            </div>
        `;
        hourlyForecast.innerHTML += hourlyItemHtml;
    });
}

const showImage = function () {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
};

