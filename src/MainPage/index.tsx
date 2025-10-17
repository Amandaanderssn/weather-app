import SearchBtn from "../Common/Components/Search Button"
import "./index.css"
// import WeatherEffect from "../Common/WeatherCodes/WeatherEffect";

const MainPage = () => {
    // const [weather, setWeather] = React.useState<"sunny" | "partly_cloudy" | "cloudy">("sunny");

    return (
        <>
            <div style={{ margin: 'auto' }} className="mainDiv">
                {/* <HeavySnowThunderWeather /> */}
                {/* <h1>Welcome to this weather app</h1> */}
                <h1>Check today’s weather and plan your day with a smile!!</h1>
                <p>Search for a city to see the weather...</p>
                <SearchBtn />
            </div>
        </>
    )
}

export default MainPage