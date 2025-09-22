import SearchBtn from "../Common/Components/Search Button"

const MainPage = () => {

    return (
        <div style={{ margin: 'auto' }}>
            <h1>Welcome to this weather app</h1>
            <p>Search for a city to see the weather...</p>
            <SearchBtn />
        </div>
    )
}

export default MainPage