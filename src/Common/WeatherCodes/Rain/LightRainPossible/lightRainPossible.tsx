import "./lightRainPossible.css";

function LightRainPossibleWeather() {
    const raindrops = Array.from({ length: 30 }); // mycket färre droppar än light rain

    return (
        <div className="rain-possible-background">
            {raindrops.map((_, i) => (
                <div
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default LightRainPossibleWeather;
