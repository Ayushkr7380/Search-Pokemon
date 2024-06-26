import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './PokemonDetails.css'
import Search from "../Search/Search"

function PokemonDetails(){
    const {id} = useParams()
    console.log(id)

    const [data,setData] = useState([])

    async function PokemonData(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        console.log(response.data)
        setData({
            id:response.data.id,
            name : response.data.name,
            image : response.data.sprites.other.dream_world.front_default ? response.data.sprites.other.dream_world.front_default : response.data.sprotes.other.home.front_default,
            height:response.data.height,
            weight : response.data.weight,
            types : response.data.types.map((t)=>t.type.name) 
        })
    }

    useEffect(()=>{
        PokemonData()
    },[])
    return (
        <div id='mainbody'>      
            <Search/>   
            <div id='PokemondetailBody'>
                <div id="image">
                    <img src={data.image} alt={data.name} />
                </div>
                <div id="details">
                    <p>Name : <span>{data.name}</span></p>
                    <p>Height : <span>{data.height} meter</span></p>
                    <p>Weight : <span>{data.weight} kg</span></p>
                    <p>Types : { data.types && data.types.map((t)=><span id="types" key={t}>{t}</span>)}</p>
                </div>
            </div>       
        </div>
    )
}

export default PokemonDetails