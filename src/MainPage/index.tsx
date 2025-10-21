import SearchBtn from "../Common/Components/Search Button"
import "./index.css"

const MainPage = () => {

    return (
        <div style={{ margin: 'auto' }} className="mainDiv">
            <h1>Check today’s weather and plan your day with a smile!!</h1>
            {/* <p>Search for a city to see the weather...</p> */}
            <SearchBtn />
        </div>
    )
}

export default MainPage