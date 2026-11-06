import { useState } from "react"
import SearchCity from "./components/searchCity"
import WeatherDisplay from "./components/weatherDisplay"

function App() {

  // state of fetching the data --------------------------------------------------------------------------
  const [state, setState] = useState("no state")

  const [weather, setWeather] = useState()

  const [cityData, setCityData] = useState()

  if (state == "no state") {
    return (
      <>

        <header>
          <div>

            <img src="" alt="Logo" />

            <h1>
              Vejrblik
            </h1>

            <p>
              DIT LOKALE VEJR
            </p>

          </div>

          <div>

            <img src="" alt="sol logo" />

            <p>
              Dansk vejr &#8451;
            </p>

          </div>
        </header>

        <main>
          <h2>
            Hvordan er vejret?
          </h2>

          <p>
            Søg efter en by, og få det aktuelle vejr med det samme.
          </p>

          <SearchCity setState={setState} setCityData={setCityData} cityData={cityData} weather={weather} setWeather={setWeather} />

        </main>

        <footer>

        </footer>
      </>
    )
  } else if (state == "pending") {
    return (<p> pending... </p>)
  } else if (state == "error") {
    return (
      <p> sorry but something went wrong please try again later </p>
    )
  }
}

export default App