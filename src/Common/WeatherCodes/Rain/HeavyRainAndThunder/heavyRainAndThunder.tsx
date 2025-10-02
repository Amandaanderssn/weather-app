import "./heavyRainAndThunder.css";

function HeavyRainThunderWeather() {
    const raindrops = Array.from({ length: 150 }); // mycket regn

    return (
        <div className="heavy-rain-thunder-background">
            {raindrops.map((_, i) => (
                <div
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${0.5 + Math.random() * 1}s`, // snabbare
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Fullskärmsblixt */}
            <div className="lightning-flash"></div>
        </div>
    );
}

export default HeavyRainThunderWeather;
