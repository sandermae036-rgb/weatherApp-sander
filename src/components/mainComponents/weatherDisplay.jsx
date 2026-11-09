
export default function WeatherDisplay({ weather, location }) {

    console.log(location);
    console.log(weather);




    return (
        <>
            <section className="aktuelVejr">
                <h2>
                    Aktuel vejr
                </h2>

                <div className="aktuelVejr__vejr">
                    <p className="aktuelVejr__vejr__country">

                    </p>

                    <h3 className="aktuelVejr__vejr__location">

                    </h3>

                    <p className="aktuelVejr__vejr__date">

                    </p>

                    <div>
                        <p className="aktuelVejr__vejr__temprature">

                        </p>

                        <div>
                            <p>
                                Føles som
                            </p>

                            <p className="aktuelVejr__vejr__feelsLike">

                            </p>
                        </div>
                    </div>

                    <p className="aktuelVejr__vejr__clouds">

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

                        </p>

                        <p>

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

                        </p>

                        <p>

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

                        </p>

                        <p>

                        </p>
                    </li>

                    <li>
                        <div>
                            <img src="adaw" alt="img of EL-mast" />

                            <p>
                                LUFTFUGTIGHED
                            </p>
                        </div>

                        <p>

                        </p>

                        <p>

                        </p>
                    </li>
                </ul>

            </section>
        </>
    )
}
