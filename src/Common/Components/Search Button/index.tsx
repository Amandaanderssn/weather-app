import SearchIcon from '@mui/icons-material/Search';
import weatherApi from '../../../weatherApi';
import React from 'react';
import WeatherDisplay from '../WeatherDisplay';
import "./index.css"

interface SearchButtonProps {
    setHasSearched: React.Dispatch<React.SetStateAction<boolean>>

}

const SearchBtn = (props: SearchButtonProps) => {

    const { setHasSearched } = props

    const [inputValue, setInputValue] = React.useState('')
    const [location, setLocation] = React.useState('')
    // const [isSearching, setIsSearching] = React.useState(false)

    const { data } = weatherApi.useGetLocationQuery(location)
    const { data: options = [] } = weatherApi.useGetOptionsQuery(inputValue)

    const handleInputChange = (event: any) => {
        setInputValue(
            event.target.value
        )
    }

    // const showInputField = () => {
    //     setIsSearching(true)
    // }

    const handleSearch = (event: React.FormEvent) => {
        // setIsSearching(false)
        event.preventDefault();
        setLocation(inputValue)
        setInputValue('')
        setHasSearched(true);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* {isSearching && */}
                <form onSubmit={handleSearch} className='form'>

                    <input
                        className="input"
                        list="location-options"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={'Search for a city to see the weather...'}
                    />

                    {options.length > 0 && (
                        <datalist id="location-options">
                            {options.map((location: any) => {
                                return (
                                    <option
                                        key={location.id}
                                        value={location.name}
                                    >
                                        {location.name}, {location.region}
                                    </option>)
                            })}
                        </datalist>
                    )}
                    <button type="submit" className='formButton'>
                        <SearchIcon sx={{ fontSize: 20 }} />
                    </button>
                </form>
                {/* } */}
                {/* {!isSearching && (
                    <button onClick={showInputField}>
                        <SearchIcon sx={{ fontSize: 20 }} />
                    </button>
                )} */}
            </div>

            {data && <WeatherDisplay location={data} />}
        </>
    )
}

export default SearchBtn;