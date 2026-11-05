import { useState } from "react"
import SearchCity from "./components/searchCity"

function App() {

  // state of fetching the data --------------------------------------------------------------------------
  const [state, setState] = useState("no state")

  if (state == "no state") {
    return (
      <>
        <SearchCity setState={setState} />
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