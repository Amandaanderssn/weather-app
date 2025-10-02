import LightSnowWeather from "../LightSnow/lightSnow"; // återanvänd din befintliga komponent
import "./lightSnowAndThunder.css"; // för lightning-flash

function LightSnowThunderWeather() {
    return (
        <div style={{ position: "relative" }}>
            {/* Återanvänd snökomponenten */}
            <LightSnowWeather />

            {/* Fullskärmsblixt */}
            <div className="lightning-flash"></div>
        </div>
    );
}

export default LightSnowThunderWeather;
