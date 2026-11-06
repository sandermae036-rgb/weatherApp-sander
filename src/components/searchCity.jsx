import WeatherDisplay from "./weatherDisplay"

export default function SearchCity({ setState, setCityData, cityData, weather, setWeather }) {

    const API_url = import.meta.env.VITE_API
    const API_key = import.meta.env.VITE_API_KEY
    // console.log(API_url, API_key);

    async function searchForCity(event) {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const city = formData.get("city")

        const url = new URL(API_url)

        url.searchParams.set("q", city)
        url.searchParams.set("appid", API_key)

        try {
            setState("pending")

            const respons = await fetch(url)
            const data = await respons.json()

            setState("no state")

            setCityData(data)

            getWeather(data)

        } catch (error) {
            setState("error")
        }
    }


    async function getWeather(locationData) {

        try {
            const latitude = locationData[0].lat

            const longtitude = locationData[0].lon

            const weatherApi = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longtitude + "&appid=" + API_key

            setState("pending")

            const weatherRespons = await fetch(weatherApi)
            const weatherData = await weatherRespons.json()

            setWeather(weatherData)

            setState("no state")

        } catch (error) {
            setState("error")
        }

    }

    return (
        <>
            <form onSubmit={(event) => {
                searchForCity(event)
            }
            }>
                <input type="text" name="city" placeholder="Search for a City" />
                <button type="submit">
                    Søg
                </button>
            </form>

            {(cityData != null && weather != null) ? <WeatherDisplay cityData={cityData} weather={weather} /> : "there is no data yet"}

        </>
    )
}
