import "./blowingSnow.css";

const BlowingSnowWeather = () => {
    const snowflakes = Array.from({ length: 50 });

    return (
        <div className="blowing-snow-background">
            {snowflakes.map((_, i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        top: `${Math.random() * 100}vh`, // utspritt över hela höjden
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default BlowingSnowWeather;
