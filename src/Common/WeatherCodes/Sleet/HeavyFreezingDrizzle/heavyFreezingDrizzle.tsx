import "./heavyFreezingDrizzle.css";

const HeavyFreezingDrizzle = () => {
    const drops = Array.from({ length: 120 }); // fler droppar

    return (
        <div className="heavy-freezing-drizzle-background">
            {drops.map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const width = 1 + Math.random() * 2; // något större droppar
                const height = 6 + Math.random() * 6;
                const duration = 1 + Math.random() * 1.5; // snabbare fall

                return (
                    <div
                        key={i}
                        className="drizzle-drop"
                        style={{
                            top: `${top}vh`,
                            left: `${left}vw`,
                            width: `${width}px`,
                            height: `${height}px`,
                            animationDuration: `${duration}s`,
                            animationDelay: `0s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default HeavyFreezingDrizzle;
