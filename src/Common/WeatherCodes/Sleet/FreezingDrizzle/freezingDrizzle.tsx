import "./freezingDrizzle.css";

const FreezingDrizzle = () => {
    const drops = Array.from({ length: 80 }); // många små droppar

    return (
        <div className="freezing-drizzle-background">
            {drops.map((_, i) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const width = 1 + Math.random() * 1; // mycket smala droppar
                const height = 5 + Math.random() * 5;
                const duration = 3 + Math.random() * 2; // långsamt fall

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
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default FreezingDrizzle;
