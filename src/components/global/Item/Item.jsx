import { NavLink } from 'react-router-dom'
import './Item.css'

const Items = ({nombre, precio, itemid})  => {
    
    return (
        <NavLink to={`/item/${itemid}`} className="navLink">
            <article className="items">
                
                    <div>
                        <h3>{nombre}</h3>
                        <p>${precio}</p>   
                    </div>
                
            </article>
        </NavLink>
       
    );
}   


export default Items; 