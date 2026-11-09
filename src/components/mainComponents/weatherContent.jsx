import { useEffect } from "react";
import WeatherDisplay from "./weatherDisplay";

export default function WeatherContent({ location, setState, setWeather, weather }) {

    const coordinates = location?.[0]
    const lon = coordinates?.lon
    const lat = coordinates?.lat

    useEffect(() => {
        if (lon == null || lat == null) {
            return
        }

        let cancelled = false
        setWeather(null)
        setState("pending")

        async function weatherData() {
            const API_key = import.meta.env.VITE_API_KEY
            const url = new URL("https://api.openweathermap.org/data/2.5/weather")
            url.searchParams.set("lat", lat)
            url.searchParams.set("lon", lon)
            url.searchParams.set("appid", API_key)

            try {
                const respons = await fetch(url)
                const data = await respons.json()

                if (!respons.ok || !data.main || !Array.isArray(data.weather)) {
                    if (!cancelled) {
                        setState("error")
                    }
                    return
                }

                if (!cancelled) {
                    setWeather(data)
                    setState("no state")
                }
            } catch (error) {
                if (!cancelled) {
                    setState("error")
                }
            }
        }

        weatherData()

        return () => {
            cancelled = true
        }
    }, [lon, lat, setState, setWeather])

    return (
        <>
            {weather?.main && coordinates && <WeatherDisplay weather={weather} location={coordinates} />}
        </>
    )
}
