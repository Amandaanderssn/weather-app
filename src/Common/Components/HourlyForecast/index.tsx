import "./index.css"

interface HourlyForecastProps {
    data: any;
}

const HourlyForecast = (props: HourlyForecastProps) => {
    const { data } = props

    const allHoursForecast = data.forecast.forecastday[0].hour;

    console.log(allHoursForecast)

    return (
        <div style={{ width: "80vw", margin: "auto", display: "flex", overflow: "scroll", scrollbarWidth: "none", marginTop: "2rem" }}>
            {allHoursForecast.map((hourObject: any, index: number) => {
                return (
                    <div key={index} className="hourlyCard">
                        <p>{hourObject.time.split(" ")[1].split(":")[0]}</p>
                        <img src={`https:${hourObject.condition.icon}`} className="icon" />
                        <p>{hourObject.temp_c}°C</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HourlyForecast;