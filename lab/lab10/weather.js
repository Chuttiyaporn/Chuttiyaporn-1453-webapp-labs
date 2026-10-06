import axios from "axios";

const API_KEY = "b7214b6ab73849a1aa1140407260610";

const city = process.argv.slice(2).join(" ");

if (!city) {
  console.log("Error: Please provide city name");
  console.log("Usage: node weather.js <city_name>");
  console.log('Example: node weather.js "Khon Kaen"');
  console.log("Note: Use quotes for city names with spaces");
  process.exit(1);
}

const getWeather = async () => {
  try {
    const response = await axios.get(
      "https://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: API_KEY,
          q: city,
        },
      }
    );

    const temperature = response.data.current.temp_c;
    const condition = response.data.current.condition.text;

    console.log(`Current temperature in ${city} is ${temperature}°C`);
    console.log(`Weather condition: ${condition}`);
  } catch (error) {
    console.log("Error: Unable to retrieve weather data");
    process.exit(1);
  }
};

getWeather();