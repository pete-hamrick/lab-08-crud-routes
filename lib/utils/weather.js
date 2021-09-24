import fetch from 'node-fetch';

export async function fetchWeather(zipcode) {
    const key = process.env.WEATHERBIT_API_KEY;
    const url = `https://api.weatherbit.io/v2.0/current?key=${key}&units=I&postal_code=${zipcode}&country=US`;

    const apiRes = await fetch(url);
    const apiData = await apiRes.json();

    const data = apiData.data.map((obj) => {
        return {
            current_temperature: obj.temp,
            air_quality: obj.aqi,
            weather_description: obj.weather.description,
            weather_observed_time: obj.ob_time,
        };
    });
    return data;
}
