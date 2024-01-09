let title = document.querySelectorAll(".title")
let desktopDate = document.querySelector(".desktopDate")
let time = document.querySelector(".time")
let main = document.querySelector(".main")
let burgermenu = document.querySelector(".burgermenu")
let backmenu = document.querySelector(".backmenu")

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
    },
    "hourly_forecast": [
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
}

let date = Object.values(Object.values(Object.values(data)[1])[2])
desktopDate.append(date[1] + " " + date[0])
time.append(date[2])

let h1 = title[0]
let p = title[1]

h1.append(Object.values(data)[0])
p.append(Object.values(data)[0])

console.log(Object.values(data));

console.log(main);
console.log(burgermenu);

burgermenu.addEventListener("click", () => {
    main.classList.add("active")
})

backmenu.addEventListener("click", () => {
    main.classList.remove("active")

})