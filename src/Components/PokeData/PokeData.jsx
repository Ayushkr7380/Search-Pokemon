import axios from "axios"
import { useEffect, useState } from "react"
import Pokemon from "../Pokemon/Pokemon"
import './PokeData.css'
function PokeData(){

    const [isLoading,setIsLoading] = useState(true)
    const [pokemonList , setPokemonList] = useState([])

    const [nextPage,setNextPage] = useState(null)
    const [previousPage,setPreviousPage] = useState(null)

    const [pokemon_Url,setpokemonurl] = useState('https://pokeapi.co/api/v2/pokemon')

    const pokemondatadownload = async() =>{
        setIsLoading(true)
        const response = await axios.get(pokemon_Url)
        console.log(response.data)

        setIsLoading(false)

        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)

        const pokemons = response.data.results
        // console.log(pokemons)

        const eachpokemondata = pokemons.map((p)=> axios.get(p.url))
        // console.log(eachpokemondata)

        const allPokemons = await axios.all(eachpokemondata)
        console.log(allPokemons)

        const PokemonList = allPokemons.map((p)=>{
            const pokemondata = p.data
            return{
                id : pokemondata.id,
                name : pokemondata.name,
                image : pokemondata.sprites.other.dream_world.front_default ? pokemondata.sprites.other.dream_world.front_default : pokemondata.sprites.other.home.front_shiny

            }
        })
        setPokemonList(PokemonList)
    }

    useEffect(()=>{
        pokemondatadownload()
    },[pokemon_Url])

    return (
        <>
            <div id="allpokemon">
                {isLoading ? <h1>Loading</h1> : 
                    pokemonList.map((p)=><Pokemon key={p.id} name={p.name} image={p.image} id={p.id}/>)
                }
                
            </div>
            <div id="buttons">
                    <button disabled={previousPage == undefined} onClick={()=>setpokemonurl(previousPage)} >Previous</button>
                    <button disabled={nextPage == undefined} onClick={()=>setpokemonurl(nextPage)}>Next</button>
            </div>
        </>
    )
}

export default PokeData