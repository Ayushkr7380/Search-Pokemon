import './Search.css'
import PokeContext from '../../Context/PokeContext/PokeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

function Search(){
    const context = useContext(PokeContext);
    const { search , setSearch ,searchPokemon} = context;
    console.log(context)

    
    return(
        <>
            <div id="search">
                <h1>Search Pokemon</h1>
                <input type="text"
                    name="search"
                    placeholder="Enter Pokemon Name here"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <Link to={`pokemon/`}>
                    <button id='searchbtn'>Search</button>
                </Link>
            </div>
        </>
    )
}
export default Search