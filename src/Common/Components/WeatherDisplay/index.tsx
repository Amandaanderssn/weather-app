import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WeatherBox from '../WeatherBox';
import SunriseAndSunset from '../SunriseAndSunset';
import './index.css'
import LocationInfo from '../LocationInfo';
import WeatherEffect from '../../WeatherCodes/WeatherEffect';

interface WeatherDisplayProps {
    location: any
}

const WeatherDisplay = (props: WeatherDisplayProps) => {
    const { location } = props

    const LocalDateAndTimeEpoch = location.location.localtime_epoch;
    const tz = location.location.tz_id;

    const moreWeatherInfo = location.forecast.forecastday[0]
    const currentWeatherCode = location.current.condition.code
    return (
        <div>
            <WeatherEffect statusCode={currentWeatherCode} location={location} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', paddingTop: "3rem" }}>
                <LocationInfo locationInfo={location} />
                <SunriseAndSunset localTimeZoneEpoch={LocalDateAndTimeEpoch} tz={tz} sunrise={moreWeatherInfo.astro.sunrise} sunset={moreWeatherInfo.astro.sunset} icon={`https:${location.current.condition.icon}`} />
            </div>
            <div className='OuterWeatherDiv'>
                <h3 style={{ margin: 'auto', maxWidth: '30rem', textAlign: 'center' }} className='ConditionText'>{location.current.condition.text}</h3>

                <div className='InnerWeatherDiv'>
                    <WeatherBox icon={<WbSunnyOutlinedIcon fontSize='small' />} title='UV Index' info={location.current.uv} />
                    <WeatherBox icon={<WaterOutlinedIcon fontSize='small' />} title='Humidity' info={`${location.current.humidity}%`} />
                    <WeatherBox icon={<AirOutlinedIcon fontSize='small' />} title='Wind' info={`${location.current.wind_kph} kph`} />
                    <WeatherBox icon={<ThunderstormRoundedIcon fontSize='small' />} title="Rain" info={`${moreWeatherInfo.day.daily_chance_of_rain}%`} />
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay