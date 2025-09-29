import HighAndLowTemp from "../HighAndLowTemp";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './index.css'

interface LocationInfoProps {
    locationInfo: any
}

const LocationInfo = (props: LocationInfoProps) => {
    const { locationInfo } = props

    const moreWeatherInfo = locationInfo.forecast.forecastday[0]

    return (
        <div className="locationInfoOuterDiv">
            <p className="locationName">
                <LocationOnOutlinedIcon /> {locationInfo.location.name}, {locationInfo.location.region}, {locationInfo.location.country}
            </p>
            <div>
                <div className='HighAndLowTempDiv'>
                    <h2 style={{ margin: '0' }} className="CurrentTemp">{locationInfo.current.temp_c}°C</h2>
                    <div className='InnerHighAndLowTempDiv'>
                        <HighAndLowTemp temperature={moreWeatherInfo.day.maxtemp_c} highestOrLowest='H' />
                        <HighAndLowTemp temperature={moreWeatherInfo.day.mintemp_c} highestOrLowest='L' />
                    </div>
                </div>
                <p className='FeelsLike'>Feels like {locationInfo.current.feelslike_c}°C</p>
            </div>
        </div>
    )
}

export default LocationInfo;