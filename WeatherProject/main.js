const data = {
    "city": "Tbilisi",
    "current_weather": {
        "temperature": "25°C",
        "wind_speed": "5 km/h",
        "date": {
            "day": 6,
            "month": "January",
            "time": "14:30"
        },
        "uv_index": 4,
        "sunrise": "07:30 AM",
        "sunset": "05:45 PM",
        "humidity": "60%",
        "dew_point": "15°C",
        "visibility": "10 km",
        "feels_like": "26°C"
    }
}

let title = document.querySelectorAll(".title")
let desktopDate = document.querySelector(".desktopDate")
let time = document.querySelector(".time")
let celsius = document.querySelectorAll(".celsius")
let feels = document.querySelectorAll(".feels")
let humid = document.querySelectorAll(".humid")
let dewpoint = document.querySelectorAll(".dewpoint")
let visibility = document.querySelectorAll(".visibility")
let sunrise = document.querySelectorAll(".sunrise")
let sunset = document.querySelectorAll(".sunset")

let date = Object.values(data.current_weather.date)
desktopDate.append(date[1] + " " + date[0])
time.append(date[2])

let title1 = title[0]
let title2 = title[1]
title1.append(data.city)
title2.append(data.city)

let celsius1 = celsius[0]
let celsius2 = celsius[1]
celsius1.append(data.current_weather.temperature)
celsius2.append(data.current_weather.temperature)

let feels1 = feels[0]
let feels2 = feels[1]
feels1.append(data.current_weather.feels_like)
feels2.append(data.current_weather.feels_like)

let humid1 = humid[0]
let humid2 = humid[1]
humid1.append(data.current_weather.humidity)
humid2.append(data.current_weather.humidity)

let dewpoint1 = dewpoint[0]
let dewpoint2 = dewpoint[1]
dewpoint1.append("The dew point is " + data.current_weather.dew_point + " right now")
dewpoint2.append("The dew point is " + data.current_weather.dew_point + " right now")

let visibility1 = visibility[0]
let visibility2 = visibility[1]
visibility1.append(data.current_weather.visibility)
visibility2.append(data.current_weather.visibility)

let sunrise1 = sunrise[0]
let sunrise2 = sunrise[1]

sunrise1.append(data.current_weather.sunrise)
sunrise2.append(data.current_weather.sunrise)

let sunset1 = sunset[0]
let sunset2 = sunset[1]
sunset1.append(data.current_weather.sunset)
sunset2.append(data.current_weather.sunset)