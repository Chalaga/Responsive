const hourlyForecast = [
    {
        "hour": "15:00",
        "temperature": "26°C",
        "condition": "Partly cloudy"
    },
    {
        "hour": "16:00",
        "temperature": "27°C",
        "condition": "Sunny"
    },
    {
        "hour": "17:00",
        "temperature": "26°C",
        "condition": "Sunny"
    },
    {
        "hour": "18:00",
        "temperature": "24°C",
        "condition": "Partly cloudy"
    },
    {
        "hour": "19:00",
        "temperature": "23°C",
        "condition": "Partly cloudy"
    },
    {
        "hour": "20:00",
        "temperature": "21°C",
        "condition": "Cloudy"
    },
    {
        "hour": "21:00",
        "temperature": "20°C",
        "condition": "Cloudy"
    },
    {
        "hour": "22:00",
        "temperature": "19°C",
        "condition": "Cloudy"
    },
    {
        "hour": "23:00",
        "temperature": "18°C",
        "condition": "Cloudy"
    },
    {
        "hour": "00:00",
        "temperature": "17°C",
        "condition": "Cloudy"
    },
    {
        "hour": "01:00",
        "temperature": "16°C",
        "condition": "Cloudy"
    },
    {
        "hour": "02:00",
        "temperature": "16°C",
        "condition": "Cloudy"
    },
    {
        "hour": "03:00",
        "temperature": "15°C",
        "condition": "Cloudy"
    },
    {
        "hour": "04:00",
        "temperature": "15°C",
        "condition": "Cloudy"
    },
    {
        "hour": "05:00",
        "temperature": "14°C",
        "condition": "Cloudy"
    },
    {
        "hour": "06:00",
        "temperature": "14°C",
        "condition": "Cloudy"
    },
    {
        "hour": "07:00",
        "temperature": "13°C",
        "condition": "Cloudy"
    },
    {
        "hour": "08:00",
        "temperature": "14°C",
        "condition": "Cloudy"
    },
    {
        "hour": "09:00",
        "temperature": "15°C",
        "condition": "Cloudy"
    },
    {
        "hour": "10:00",
        "temperature": "17°C",
        "condition": "Partly cloudy"
    },
    {
        "hour": "11:00",
        "temperature": "19°C",
        "condition": "Sunny"
    },
    {
        "hour": "12:00",
        "temperature": "21°C",
        "condition": "Sunny"
    },
    {
        "hour": "13:00",
        "temperature": "23°C",
        "condition": "Sunny"
    },
    {
        "hour": "14:00",
        "temperature": "24°C",
        "condition": "Sunny"
    }
]

let forecast = document.querySelector(".forecast")


hourlyForecast.map((item) => {
    let img = document.createElement("img")
    let div = document.createElement("div")
    div.append(img)
    div.append(Object.values(item.temperature).join(""))
    div.append(Object.values(item.hour).join(""))
    forecast.append(div)
    console.log(item);
    if (item.condition === "Sunny"){
        img.src = "/Assets/forecasticons/sunny.svg"
        
    }else if (item.condition === "Cloudy"){
        img.src = "/Assets/forecasticons/cloudy.svg"
        
    }else if (item.condition === "Partly cloudy"){
        img.src = "/Assets/forecasticons/partlycloudy.svg"
        
    }
})






// console.log(Object.values(data.hourly_forecast[0]));
// console.log(data)
