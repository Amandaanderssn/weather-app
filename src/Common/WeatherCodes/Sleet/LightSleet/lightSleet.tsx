import "./lightSleet.css";

const LightSleetWeather = () => {
    const snowflakes = Array.from({ length: 30 });
    const raindrops = Array.from({ length: 50 });

    return (
        <div className="light-snowrain-background">
            {/* Snö */}
            {snowflakes.map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = 2 + Math.random() * 4; // mindre flingor
                const duration = 4 + Math.random() * 5;

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
                const height = 10 + Math.random() * 10;
                const width = 3;
                const duration = 1 + Math.random() * 2;

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

export default LightSleetWeather;
