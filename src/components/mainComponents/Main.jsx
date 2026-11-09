import { useState } from "react";
import GeoLocation from "./GeoLocationForm";
import WeatherContent from "./weatherContent";

export default function Main() {

    const [location, setLocation] = useState(null)
    const [weather, setWeather] = useState(null)

    const [state, setState] = useState("no state")

    return (
        <>
            <main>
                <h2>
                    Hvordan er vejret?
                </h2>

                <p>
                    Søg efter en by, og få det aktuelle vejr med det samme.
                </p>

                {/* form ----------------------------------------------------------- */}
                < GeoLocation setState={setState} setLocation={setLocation} />

                {/* sets the state if data is getting fetched = pending, if data failed to fetch = error, if data succed it displays the goes fetching again */}
                {state === "pending" ? (
                    <p>pending...</p>
                ) : state === "error" ? (
                    <p>Sorry but, something went wrong. Please try again later.</p>
                ) : (
                    location && <WeatherContent location={location} setState={setState} setWeather={setWeather} weather={weather} />
                )}

                {/* the actual weather data displayed -------------------------------------------------*/}


            </main>
        </>
    )
}
