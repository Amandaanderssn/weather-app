// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WeatherBox from '../WeatherBox';
// import HighAndLowTemp from '../HighAndLowTemp';
import SunriseAndSunset from '../SunriseAndSunset';
import './index.css'
import LocationInfo from '../LocationInfo';
import WeatherEffect from '../../WeatherCodes/WeatherEffect';

interface WeatherDisplayProps {
    location: any
}

const WeatherDisplay = (props: WeatherDisplayProps) => {
    const { location } = props

    // console.log("Weather display komponenten", location)

    // const LocalDateAndTime = location.location.localtime;
    const LocalDateAndTimeEpoch = location.location.localtime_epoch;
    const tz = location.location.tz_id;

    // console.log("LOCAL TIME", currentLocalTime)
    const moreWeatherInfo = location.forecast.forecastday[0]
    // console.log("mer info", moreWeatherInfo.day)
    // console.log(moreWeatherInfo.day.condition.code)

    // console.log(location.current.condition.code)
    // const currentWeatherCode = location.current.condition.code
    return (
        <div>
            <WeatherEffect statusCode={1171} location={location} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* <div style={{ margin: 'auto', width: '80%', maxWidth: '30rem', height: 'auto' }}>
                    <h3>
                        <LocationOnOutlinedIcon /> {location.location.name}, {location.location.region}, {location.location.country}
                    </h3>
                    <div>
                        <div className='HighAndLowTempDiv'>
                            <h2 style={{ fontSize: '4.5rem', margin: '0' }}>{location.current.temp_c}°C</h2>
                            <div className='InnerHighAndLowTempDiv'>
                                <HighAndLowTemp temperature={moreWeatherInfo.day.maxtemp_c} highestOrLowest='H' />
                                <HighAndLowTemp temperature={moreWeatherInfo.day.mintemp_c} highestOrLowest='L' />
                            </div>
                        </div>
                        <p className='FeelsLike'>Feels like {location.current.feelslike_c}°C</p>
                    </div>
                </div> */}
                <LocationInfo locationInfo={location} />
                <SunriseAndSunset localTimeZoneEpoch={LocalDateAndTimeEpoch} tz={tz} sunrise={moreWeatherInfo.astro.sunrise} sunset={moreWeatherInfo.astro.sunset} icon={`https:${location.current.condition.icon}`} />
            </div>
            <div className='OuterWeatherDiv'>
                <h3 style={{ margin: 'auto', maxWidth: '30rem', textAlign: 'center' }} className='ConditionText'>{location.current.condition.text}</h3>
                {/* <img style={{ fontSize: '6rem', width: '200px' }} src={`https:${location.current.condition.icon}`} /> */}

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