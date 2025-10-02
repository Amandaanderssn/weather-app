import "./icePellets.css";

function IcePelletsWeather() {
    const pellets = Array.from({ length: 100 }); // ganska många iskorn

    return (
        <div className="ice-pellets-background">
            {pellets.map((_, i) => (
                <div
                    key={i}
                    className="ice-pellet"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * -100}vh`,
                        animationDuration: `${0.8 + Math.random() * 0.7}s`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default IcePelletsWeather;
