import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './PokemonDetails.css'
import Search from "../Search/Search"
import PokeContext from "../../Context/PokeContext/PokeContext"

function PokemonDetails(){

    const context = useContext(PokeContext);

    const { search } = context;
    console.log('Search from pokedetails ',search)

    const pokemonname = search.trim().toLowerCase();


    const {id} = useParams()
    // console.log(id)


    const [data,setData] = useState([])
    const [ res , setRes] = useState(false)
    const [loading , setLoading ] = useState(true)

    async function PokemonData(){
        try {
            
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id ? id : pokemonname}/`)
            console.log(response.data)
            setData({
            id:response.data.id,
            name : response.data.name,
            image : response.data.sprites.other.dream_world.front_default ? response.data.sprites.other.dream_world.front_default : response.data.sprotes.other.home.front_default,
            height:response.data.height,
            weight : response.data.weight,
            types : response.data.types.map((t)=>t.type.name) 
            })
            setRes(true)
        } catch (error) {
            console.log(error)
                setRes(false)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        PokemonData()
    },[])
    return (
        <>   {loading ? (<h1 style={{
            color:'white',
            textAlign:'center',
            fontSize:'3rem',
            marginTop:'25vh'
            }}>Loading .....</h1>) :     
            res ? 
            ( <> <h1 style={{
                color:'white',
                textAlign:'center',
                fontSize:'3rem',
                textDecoration:'underline'
                }}>{data.name}</h1>
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
            </div> </>) : (<h1 style={{
            color:'white',
            textAlign:'center',
            fontSize:'3rem',
            marginTop:'25vh'
            }}>Pokemon Not Found</h1>)  }       
        </>
    )
}

export default PokemonDetails