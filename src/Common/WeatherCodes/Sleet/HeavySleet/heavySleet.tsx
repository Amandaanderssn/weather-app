import "./heavySleet.css";

const HeavySleetWeather = () => {
    const snowflakes = Array.from({ length: 80 }); // fler flingor
    const raindrops = Array.from({ length: 120 }); // fler droppar

    return (
        <div className="heavy-snowrain-background">
            {/* Snö */}
            {snowflakes.map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = 2 + Math.random() * 5;
                const duration = 4 + Math.random() * 4; // snön faller långsamt

                return (
                    <div
                        key={`snow-${i}`}
                        className="snowflake"
                        style={{
                            top: `${top}vh`,
                            left: `${left}vw`,
                            width: `${size}px`,
                            height: `${size}px`,
                            animationDuration: `${duration}s`,
                        }}
                    />
                );
            })}

            {/* Regn */}
            {raindrops.map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const height = 10 + Math.random() * 15;
                const width = 3;
                const duration = 0.8 + Math.random() * 1; // regnet faller snabbt

                return (
                    <div
                        key={`rain-${i}`}
                        className="raindrop"
                        style={{
                            top: `${top}vh`,
                            left: `${left}vw`,
                            width: `${width}px`,
                            height: `${height}px`,
                            animationDuration: `${duration}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default HeavySleetWeather;
