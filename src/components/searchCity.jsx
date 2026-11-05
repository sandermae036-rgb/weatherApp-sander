export default function SearchCity() {

    function searchForCity(event) {
        event.preventDefault()

        const formData = event.target
        console.log(formData);
    }

    return (
        <>
            <form onSubmit={() => {
                searchForCity()
            }}>
                <input type="text" name="city" placeholder="Search for a City" />
                <button type="submit">
                    Søg
                </button>
            </form>
        </>
    )
}
