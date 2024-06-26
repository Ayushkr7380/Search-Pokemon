import './Pokemon.css'
import { Link } from 'react-router-dom'
function Pokemon({name,image,id}){
    return (
        <>
            <div id="pokemon">
                <Link to={`pokemon/${id}`} id='link'>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </Link>
            </div>
        </>
    )
}
export default Pokemon