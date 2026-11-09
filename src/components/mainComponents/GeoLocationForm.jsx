export default function GeoLocation({ setState, setLocation }) {

    const API_url = import.meta.env.VITE_API
    const API_key = import.meta.env.VITE_API_KEY

    async function searchForGeoLocation(event) {

        event.preventDefault()

        const city = new FormData(event.target).get("city")

        const url = new URL(API_url)

        url.searchParams.set("q", city)
        url.searchParams.set("appid", API_key)
        if (city == " ") {
            setState("error")
        } else if (city == "") {
            setState("error")
        } else {

            try {
                setState("pending")
                const respons = await fetch(url)
                const data = await respons.json()

                setState("no state")

                setLocation(data)


            } catch (error) {
                setState("error")
            }
        }
    }

    return (
        <>
            <form onSubmit={(event) => {
                searchForGeoLocation(event)
            }
            }>
                <input type="text" name="city" placeholder="Search for a City" />
                <button type="submit">
                    Søg
                </button>
            </form>
        </>
    )
}
