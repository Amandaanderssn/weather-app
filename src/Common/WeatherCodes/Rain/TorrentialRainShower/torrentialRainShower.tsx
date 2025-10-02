import HeavyRainWeather from "../HeavyRain/heavyRain"; // återanvänd heavy rain
import "./torrentialRainShower.css";

function TorrentialRainShowerWeather() {
    return (
        <div className="torrential-rain-shower-background">
            <div className="shower-layer">
                <HeavyRainWeather />
            </div>
        </div>
    );
}

export default TorrentialRainShowerWeather;
