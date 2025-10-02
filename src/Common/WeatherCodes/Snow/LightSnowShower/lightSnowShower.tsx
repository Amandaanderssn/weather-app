import LightSnowWeather from "../LightSnow/lightSnow";
import "./lightSnowShower.css";

function LightSnowShowersWeather() {
    return (
        <>
            {/* Bakgrunden ligger fixed och tar hela skärmen */}
            <div className="light-snow-showers-background">
                <LightSnowWeather />
            </div>
        </>
    );
}

export default LightSnowShowersWeather;
