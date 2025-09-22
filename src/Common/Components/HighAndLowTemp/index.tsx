import './index.css'

interface HighAndLowTempProps {
    temperature: number
    highestOrLowest: string
}

const HighAndLowTemp = (props: HighAndLowTempProps) => {
    const { temperature, highestOrLowest } = props

    return (
        <p className="HighAndLowTemp">{highestOrLowest}: {temperature}</p>

    )
}

export default HighAndLowTemp;