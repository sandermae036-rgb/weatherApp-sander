export default function SearchCity() {

    function searchForCity(event) {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const city = formData.get("city")



        console.log(city);
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
