export default function WeatherDisplay({ cityData, weather }) {

    const city = cityData[0];
    console.log(city);

    console.log(weather);


    return (
        <>
            <section>
                <h3>
                    Aktuel vejr
                </h3>

                <div>
                    <p>
                        {city.country}
                    </p>

                    <h4>
                        {city.local_names.da}
                    </h4>

                </div>
            </section>


        </>
    )
}
