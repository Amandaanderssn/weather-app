import "./lightRain.css";

function LightRainWeather() {
    const raindrops = Array.from({ length: 40 }); // lagom många droppar för light rain

    return (
        <div className="light-rain-background">
            {raindrops.map((_, i) => (
                <div
                    key={i}
                    className="raindrop"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`, // spridda lite olika högt
                        animationDuration: `${2 + Math.random() * 2}s`, // olika hastighet
                        animationDelay: `${Math.random() * 2}s`, // startar olika tider
                    }}
                />
            ))}
        </div>
    );
}

export default LightRainWeather;
