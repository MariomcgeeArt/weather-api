

 function getWeather(apiKey, zip, callback) {   
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    fetch(path)
      .then(res => res.json())
      .then(callback)
        
      
      .catch(err => console.log(err.message))

  }

  export {
    getWeather
}