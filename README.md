## Weather App 🌦
A simple weather application built with HTML, CSS, and Vanilla JavaScript that allows users to fetch and display current weather data and a 24-hour weather forecast for any city using the OpenWeatherMap API.

## Features
- Search for current weather conditions in any city.
- View the weather description, temperature, and an icon representing the current weather.
- Display a 24-hour weather forecast with hourly temperature and weather icons.
- Dynamic updates: Clear previous data when fetching new city weather.
- Responsive design for use on mobile and desktop devices.

## How It Works
**Search Input:** Users enter a city name in the input field and submit.
**API Integration:**
- Fetches current weather data from OpenWeatherMap's Weather API.
- Fetches 24-hour forecast data from OpenWeatherMap's Forecast API.
**Data Display:**
- Current weather conditions (temperature, weather description, and icon) are shown.
- Hourly forecast is displayed with the time, temperature, and weather icon.

## Technologies Used
**HTML:** Provides the structure of the application.
**CSS:** Styles the app and ensures a visually appealing, responsive design.
**JavaScript:** Handles data fetching, DOM manipulation, and event handling.
**OpenWeatherMap API:** Supplies the weather data.

## Installation & Usage
**Prerequisites**
- A modern web browser.
- A free API key from OpenWeatherMap.

## API Integration Details
**Current Weather API:**
Endpoint: https://api.openweathermap.org/data/2.5/weather
Key Parameters: q (city name), appid (API key)
**Forecast API:**
Endpoint: https://api.openweathermap.org/data/2.5/forecast
Key Parameters: q (city name), appid (API key)








