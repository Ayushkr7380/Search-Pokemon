import { useState } from "react"
import PokeData from "../PokeData/PokeData"
import Search from "../Search/Search"

function Pokedex(){
    
    return (
        <>
            <Search />
            <PokeData/>
        </>
    )
}
export default Pokedex