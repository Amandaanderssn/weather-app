import React from "react";
import { DateTime } from 'luxon';
import './index.css'

interface SunriseAndSunsetProps {
    localTimeZoneEpoch: number
    tz: any
    sunrise: string
    sunset: string
    icon: string
}

const SunriseAndSunset = (props: SunriseAndSunsetProps) => {
    const { localTimeZoneEpoch, tz, sunrise, sunset, icon } = props

    const sunRef = React.useRef<HTMLImageElement>(null);
    const arcRef = React.useRef<HTMLDivElement>(null);

    const updateSunPosition = () => {
        const sun = sunRef.current;
        const arc = arcRef.current;
        if (!sun || !arc) return;


        const now = DateTime.fromSeconds(localTimeZoneEpoch, { zone: tz });
        const todayStr = now.toFormat("yyyy-MM-dd");

        const rise = DateTime.fromFormat(`${todayStr} ${sunrise}`, "yyyy-MM-dd h:mm a", { zone: tz });
        const set = DateTime.fromFormat(`${todayStr} ${sunset}`, "yyyy-MM-dd h:mm a", { zone: tz });


        if (!rise.isValid || !set.isValid) {
            console.warn("Invalid sunrise or sunset time");
            return;
        }

        let angle;
        if (now < rise) {
            // Före soluppgång → sätt solen lite utanför vänster
            angle = Math.PI + 0.3; // 0.3 rad extra vänster om sunrise
        } else if (now > set) {
            // Efter solnedgång → sätt solen lite utanför höger
            angle = -0.3; // -0.3 rad utanför högerkant
        } else {
            // Mellan sunrise och sunset
            const progress = (now.toMillis() - rise.toMillis()) / (set.toMillis() - rise.toMillis());
            angle = Math.PI * (1 - progress);
        }

        // --- Halvcirkel: responsiv ---
        const arcWidth = arc.clientWidth;
        const arcHeight = arc.clientHeight;
        const clipFraction = 0.65;
        const visibleHeight = arcHeight * (1 - clipFraction);

        const radiusX = arcWidth / 2;
        const radiusY = visibleHeight;
        const centerX = arcWidth / 2;

        // Solens position på bågen
        const x = centerX + radiusX * Math.cos(angle);
        const y = radiusY * (1 - Math.sin(angle)); // 0 = högsta punkten, radiusY = horisont

        // Begränsa inom div
        sun.style.left = `${Math.min(Math.max(x, 0), arcWidth - sun.clientWidth)}px`;
        sun.style.top = `${Math.min(Math.max(y, 0), arcHeight - sun.clientHeight)}px`;
        sun.style.opacity = "1";

    };

    React.useEffect(() => {
        updateSunPosition();

        const interval = setInterval(updateSunPosition, 60000); // varje minut
        return () => clearInterval(interval);
    }, [localTimeZoneEpoch, sunrise, sunset]);


    return (
        <div className="OuterDiv">
            <div ref={arcRef} className="OuterImgDiv">
                <img ref={sunRef} src={icon} className="Img" />
            </div>

            <div className="OuterTextDiv">
                <p>sunrise {sunrise}</p>
                <p>sunset {sunset}</p>
            </div>

        </div >
    )
}

export default SunriseAndSunset