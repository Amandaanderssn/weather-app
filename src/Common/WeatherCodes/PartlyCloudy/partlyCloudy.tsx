import "./partlyCloudy.css";

const PartlyCloudyWeather = () => {
    return (
        <div className="partly-cloudy-background">
            <div className="sun"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>

            <div className="cloud-delayed"></div>
            <div className="cloud-delayed"></div>
            <div className="cloud-delayed"></div>
        </div>
    );
}

export default PartlyCloudyWeather;
