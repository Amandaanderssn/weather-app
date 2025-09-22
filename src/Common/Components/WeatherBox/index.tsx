import './index.css'

interface WeatherBoxProps {
    icon: any
    title: string
    info: string | number
}

const WeatherBox = (props: WeatherBoxProps) => {
    const { icon, title, info } = props

    return (
        <div className='OuterWeatherBoxDiv'>
            <div className='InnerWeatherBoxDiv'>
                <p style={{ margin: 0, display: 'flex', alignItems: 'center' }}>{icon}</p>
                <p style={{ margin: 0, marginLeft: '0.3rem' }}>{title}</p>
            </div>
            <h5 style={{ margin: 0, fontSize: '1.3rem' }}>{info}</h5>
        </div>
    )
}

export default WeatherBox;