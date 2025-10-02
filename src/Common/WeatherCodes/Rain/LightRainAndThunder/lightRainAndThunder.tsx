import "./lightRainAndThunder.css";
// weather code 1273

function LightRainThunderWeather() {
    const raindrops = Array.from({ length: 60 }); // lite mindre regn än heavy

    return (
        <div className="light-rain-thunder-background">
            {raindrops.map((_, i) => (
                <div
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${1 + Math.random() * 1.5}s`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Blixt */}
            <div className="lightning"></div>
        </div>
    );
}

export default LightRainThunderWeather;
