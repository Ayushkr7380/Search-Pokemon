import { useState } from "react";
import PokeContext from "../PokeContext/PokeContext";

function PokeProvider(props){

    const [search , setSearch] = useState('')
    function searchPokemon(e){
        e.preventDefault();
        console.log(search)
        // setSearch('')
        // console.log(context)

    }

    return(
        <>
            <PokeContext.Provider value={{ search ,setSearch ,searchPokemon}}>
                {props.children}
            </PokeContext.Provider>
        </>
    )

}
export default PokeProvider