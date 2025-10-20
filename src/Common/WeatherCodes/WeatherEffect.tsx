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
    // console.log(WeatherCodes[statusCode])
    // console.log(WeatherComponent)

    React.useEffect(() => {

    }, [location])

    if (!WeatherComponent) {
        console.warn(`No weather animation exists for status code ${statusCode}`)
        return null;
    }

    return (
        <WeatherComponent />
    )

}

export default WeatherEffect;
