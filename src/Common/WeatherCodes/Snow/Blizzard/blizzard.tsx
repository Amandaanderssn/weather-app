import "./blizzard.css";

const BlizzardWeather = () => {
    const snowflakes = Array.from({ length: 100 });

    return (
        <div className="snowstorm-background">
            {snowflakes.map((_, i) => {
                const startTop = Math.random() * 100; // start Y (0–100vh)
                const startLeft = Math.random() * 100; // start X (0–100vw)
                const size = 2 + Math.random() * 15; // 2–8px
                const duration = 1.5 + Math.random() * 2; // 3–6s
                // const delay = Math.random() * 5;

                return (
                    <div
                        key={i}
                        className="snowflake"
                        style={{
                            top: `${startTop}vh`,
                            left: `${startLeft}vw`,
                            width: `${size}px`,
                            height: `${size}px`,
                            animationDuration: `${duration}s`,
                            // animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default BlizzardWeather;
