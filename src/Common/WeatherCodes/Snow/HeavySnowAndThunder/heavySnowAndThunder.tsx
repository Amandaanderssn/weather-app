import HeavySnowWeather from "../HeavySnow/heavySnow"; // återanvänd komponenten
import "./heavySnowAndThunder.css"; // för lightning-flash

function HeavySnowThunderWeather() {
    return (
        <div style={{ position: "relative" }}>
            {/* Återanvänd snökomponenten */}
            <HeavySnowWeather />

            {/* Fullskärmsblixt */}
            <div className="lightning-flash"></div>
        </div>
    );
}

export default HeavySnowThunderWeather;
