import { useEffect } from "react";

export default function WeatherContent({ location, setState, setWeather, weather }) {

    const lon = location[0].lon

    const lat = location[0].lat

    useEffect(() => {
        weatherData()

        async function weatherData() {
            const API_key = import.meta.env.VITE_API_KEY

            const url = new URL("https://api.openweathermap.org/data/2.5/weather")

            url.searchParams.set("lat", lat)
            url.searchParams.set("lon", lon)
            url.searchParams.set("appid", API_key)

            try {
                const respons = await fetch(url)
                const data = await respons.json()

                setWeather(data)

            } catch (error) {
                setState("error")
            }

        }

    }, [lon, lat])

    return (
        <>

        </>
    )
}
