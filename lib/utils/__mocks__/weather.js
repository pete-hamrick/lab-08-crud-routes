export function mockFetchWeather() {
    const num = 1;
    const data = [
        {
            current_temperature: 71,
            air_quality: 16,
            weather_description: 'Sunny',
            weather_observed_time: '2021-09-24 14:07',
        },
    ];
    if (num) {
        return data;
    }
}

// const fetch = {
//     get: jest.fn(() =>
//         Promise.resolve({
//             current_temperature: 71,
//             air_quality: 16,
//             weather_description: 'Sunny',
//             weather_observed_time: '2021-09-24 14:07',
//         })
//     ),
// };

// export default fetch;
