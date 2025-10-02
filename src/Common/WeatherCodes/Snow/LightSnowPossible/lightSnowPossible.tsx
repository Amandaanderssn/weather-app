import "./lightSnowPossible.css";

function LightSnowPossibleWeather() {
    const snowflakes = Array.from({ length: 20 }); // glesare än LightSnowWeather

    return (
        <div className="light-snow-possible-background">
            {snowflakes.map((_, i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${4 + Math.random() * 3}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default LightSnowPossibleWeather;
