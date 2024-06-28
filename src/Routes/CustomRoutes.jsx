import { Routes ,Route} from 'react-router-dom'
import Pokedex from '../Components/Pokedex/Pokedex'
import PokemonDetails from '../Components/PokemonDetails/PokemonDetails'
function CustomRoutes(){
    return (
        <>
           <Routes>
                <Route path='/' element={<Pokedex/>}></Route>
                <Route path='pokemon/:id' element={<PokemonDetails/>}></Route>
                <Route path='pokemon/' element={<PokemonDetails/>}></Route>
            </Routes> 
        </>
    )
}
export default CustomRoutes