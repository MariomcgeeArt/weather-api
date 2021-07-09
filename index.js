

 async function getWeather(apiKey, zip) {   
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    const res = await fetch(path) // code stops here and waits for promise to resolve
    const json = await res.json() // waits here for promise to resolve
    return json
 }

  export {
    getWeather
}