const axios = require("axios");
const apiKey = "AIzaSyClUvR3dTnBzmjHKPFEwqCLY9IIY_xaUZY";

//Places api

/**
 * Search location
 * @date 2020-11-12
 * @param {any} place
 * @param {any} apiKey
 * @returns {object}
 */
export async function searchLocation(place, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${place}&key=${apiKey}`;
    return axios.get(url).then((data) => {
        //random value function for wait time
        for (let i = 0 ; i < data.data.results.length ; i++){
            data.data.results[i].waitTime = Math.floor((Math.random() * 40) + 5);
        }
        return data.data.results
    })
}

/**
 * Find Nearby Restaurants also filters
 * @date 2020-11-12
 * @param {any} type
 * @param {any} keyword
 * @param {string} lat
 * @param {string} long
 * @param {string} apiKey
 * @returns {array of objects}
 */
export async function getRestaurantsAroundUser(type, keyword, lat, long, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=500&type=${[type]}&keyword=${keyword}&key=${apiKey}`;
    return await (await axios.get(url)).data;
    // return await (await axios.get(url));
}



// Testing
// (async () => {
//     const result = await searchLocation('restaurant', apiKey);
//     console.log(result)
// })();


// Testing
// (async () => {
//     const result = await getRestaurantsAroundUser(
//         "restaurant",
//         "sushi",
//         "49.2831362",
//         "-123.1055581",
//         apiKey
//     );
//     console.log(result);
// })();