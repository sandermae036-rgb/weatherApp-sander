
export default function WeatherDisplay({ weather, location }) {

    console.log(location);
    console.log(weather);

    const regionNameInEnglish = new Intl.DisplayNames(["da"], { type: "region" });

    const currentDate = new Date().toDateString();

    const currentTempratureCelcius = Math.round(weather.main.temp - 273.15);

    const feelsLikeTemprature = Math.round(weather.main.feels_like - 273.15);

    return (
        <>
            <section className="aktuelVejr">
                <div>
                    <h2>
                        Aktuel vejr
                    </h2>

                    <p>
                        OPDATERET LIGE NU
                    </p>
                </div>

                <div className="aktuelVejr__vejr">
                    <p className="aktuelVejr__vejr__country">
                        {regionNameInEnglish.of(location.country)}
                    </p>

                    <h3 className="aktuelVejr__vejr__location">
                        {location.name}
                    </h3>

                    <p className="aktuelVejr__vejr__date">
                        - {currentDate}
                    </p>

                    <div>
                        <p className="aktuelVejr__vejr__temprature">
                            {currentTempratureCelcius}&deg;
                        </p>

                        <div>
                            <p>
                                Føles som
                            </p>

                            <p className="aktuelVejr__vejr__feelsLike">
                                {feelsLikeTemprature}&deg;
                            </p>
                        </div>
                    </div>

                    <p className="aktuelVejr__vejr__clouds">
                        {weather.weather[0].description}
                    </p>

                    <div className="aktuelVejr__vejr__dataFrom">
                        <ul>
                            <li>
                                <p className="aktuelVejr__vejr__dataFrom--source">
                                    Vejrdata fra OpenWeather
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="weatherConditions">
                <h2>
                    Vejrforhold
                </h2>

                <p>
                    Flere detaljer om vejret i {""}
                </p>

                <ul className="Details">
                    <li>
                        <div>
                            <img src="adaw" alt="img of light" />

                            <p>
                                FØLES SOM
                            </p>
                        </div>

                        <p>
                            {Math.round(feelsLikeTemprature)}&deg;
                        </p>

                    </li>

                    <li>
                        <div>
                            <img src="adaw" alt="img of water droplet" />

                            <p>
                                LUFTFUGTIGHED
                            </p>
                        </div>

                        <p>
                            {weather.main.humidity}%
                        </p>
                    </li>

                    <li>
                        <div>
                            <img src="adaw" alt="img of wind" />

                            <p>
                                VIND
                            </p>
                        </div>

                        <p>
                            {weather.wind.speed} m/s
                        </p>
                    </li>

                    <li>
                        <div>
                            <img src="adaw" alt="img of EL-mast" />

                            <p>
                                LUFTTRYK
                            </p>
                        </div>

                        <p>
                            {weather.main.pressure} hPa
                        </p>
                    </li>
                </ul>

            </section>
        </>
    )
}
