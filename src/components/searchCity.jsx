export default function SearchCity({ setState }) {

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

        // console.log(city);
        // console.log(url);

        try {
            setState("pending")

            const respons = await fetch(url)
            const data = await respons.json()

            console.log(respons);
            console.log(data);

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
        </>
    )
}
