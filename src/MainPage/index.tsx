import React from "react"
import SearchBtn from "../Common/Components/Search Button"
import "./index.css"

const MainPage = () => {

    const [hasSearched, sethasSearched] = React.useState(false)

    return (
        <div style={{ margin: 'auto' }} className="mainDiv">
            {!hasSearched &&
                <h1>Check today’s weather and plan your day with a smile!!</h1>
            }
            <SearchBtn setHasSearched={sethasSearched} />
        </div>
    )
}

export default MainPage