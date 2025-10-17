import React from "react";
import WeatherCodes from "./WeatherConfig";

type WeatherEffectProps = {
    statusCode: number
    location: any
}
// console.log(WeatherCodes[1000])

const WeatherEffect = (props: WeatherEffectProps) => {
    const { statusCode, location } = props;
    const WeatherComponent = WeatherCodes[statusCode];

    React.useEffect(() => {

    }, [location])

    return (
        <WeatherComponent />
    )

}

export default WeatherEffect;
