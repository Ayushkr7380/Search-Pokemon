import './Search.css'
function Search(){
    return(
        <>
            <div id="search">
                <h1>Search Pokemon</h1>
                <input type="text"
                    name="search"
                    placeholder="Enter Pokemon Name here"
                />
            </div>
        </>
    )
}
export default Search