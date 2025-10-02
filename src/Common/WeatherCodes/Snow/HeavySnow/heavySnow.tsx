import "./heavySnow.css";

function HeavySnowWeather() {
    const snowflakes = Array.from({ length: 120 }); // mycket fler flingor

    return (
        <div className="heavy-snow-background">
            {snowflakes.map((_, i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${3 + Math.random() * 2}s`, // snabbare än light snow
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default HeavySnowWeather;
