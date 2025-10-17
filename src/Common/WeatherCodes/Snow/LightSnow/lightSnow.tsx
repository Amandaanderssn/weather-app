import "./lightSnow.css";

const LightSnowWeather = () => {
    const snowflakes = Array.from({ length: 40 }); // få, spridda flingor

    return (
        <div className="light-snow-background">
            {snowflakes.map((_, i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${6 + Math.random() * 4}s`, // långsamt
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default LightSnowWeather;
