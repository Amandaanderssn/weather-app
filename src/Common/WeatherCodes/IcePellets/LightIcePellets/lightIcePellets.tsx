import "./lightIcePellets.css";

const LightIcePelletsWeather = () => {
    const hail = Array.from({ length: 50 });

    return (
        <div className="light-hail-background">
            {hail.map((_, i) => {
                const top = 0;
                const left = Math.random() * 100;
                const size = 3 + Math.random() * 4;
                const duration = 1.5 + Math.random() * 1;

                return (
                    <div
                        key={i}
                        className="hail"
                        style={{
                            top: `${top}vh`,
                            left: `${left}vw`,
                            width: `${size}px`,
                            height: `${size}px`,
                            animationDuration: `${duration}s`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default LightIcePelletsWeather;
