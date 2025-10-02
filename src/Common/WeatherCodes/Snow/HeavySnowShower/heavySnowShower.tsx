import HeavySnowWeather from "../HeavySnow/heavySnow"; // återanvänd HeavySnowWeather
import "./heavySnowShower.css";

function HeavySnowShowersWeather() {
    return (
        <>
            <div className="heavy-snow-showers-background">
                <div className="shower-layer">
                    <HeavySnowWeather />
                </div>
            </div>
        </>
    );
}

export default HeavySnowShowersWeather;
