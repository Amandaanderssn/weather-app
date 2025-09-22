import SearchIcon from '@mui/icons-material/Search';
import weatherApi from '../../../weatherApi';
import React from 'react';
import WeatherDisplay from '../WeatherDisplay';

const SearchBtn = () => {
    const [inputValue, setInputValue] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [isSearching, setIsSearching] = React.useState(false)

    const { data } = weatherApi.useGetLocationQuery(location)
    const { data: options = [] } = weatherApi.useGetOptionsQuery(inputValue)
    // console.log(options)
    // console.log(isFetching)
    console.log(inputValue)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (event: any) => {
        setInputValue(
            event.target.value
        )
        // if (inputValue) {
        //     console.log(options)
        // }
    }

    const showInputField = () => {
        setIsSearching(true)
    }

    const handleSearch = () => {
        console.log(data)
        setIsSearching(false)
        setLocation(inputValue)
        setInputValue('')
    }

    console.log(inputValue)
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {isSearching &&
                    <form>
                        <input list="location-options" value={inputValue} onChange={handleInputChange} placeholder={'sök på stad..'} style={{ marginRight: '0.5rem' }} />

                        {options.length > 0 && (
                            <datalist id="location-options">
                                {options.map((location: any) => {
                                    return (
                                        <option
                                            key={location.id}
                                            // onClick={() => setInputValue(location.name)}
                                            value={location.name}
                                        >
                                            {location.name}, {location.region}
                                        </option>)
                                })}
                            </datalist>
                        )}
                    </form>
                }
                <button
                    onClick={!isSearching ? showInputField : handleSearch}>
                    <SearchIcon sx={{ fontSize: 20 }} />
                </button>
            </div>

            {data && <WeatherDisplay location={data} />}
        </>
    )
}

export default SearchBtn;