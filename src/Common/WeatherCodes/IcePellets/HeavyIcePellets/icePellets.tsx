import "./icePellets.css";

function IcePelletsWeather() {
    const pellets = Array.from({ length: 100 }); // ganska många iskorn

    return (

        <div className="ice-pellets-background">
            {pellets.map((_, i) => {
                const top = 0;
                const left = Math.random() * 100;
                const size = 3 + Math.random() * 4;
                const duration = 1.5 + Math.random() * 1;

                return (
                    <div
                        key={i}
                        className="ice-pellet"
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
}

export default IcePelletsWeather;
