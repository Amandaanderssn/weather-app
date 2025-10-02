import "./heavyRain.css";

function HeavyRainWeather() {
    const raindrops = Array.from({ length: 120 }); // fler droppar för heavy rain

    return (
        <div className="heavy-rain-background">
            {raindrops.map((_, i) => (
                <div
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${1 + Math.random() * 1.5}s`, // snabbare
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default HeavyRainWeather;
