import './ProductCard.css';

import { NavLink } from 'react-router-dom';


const ProductCard = ({nombre, precio, stock, foto, itemid}) => {
  
    return(
        <NavLink to={`/item/${itemid}`} className='boton' >
            <article className="productCard">
                <img src={foto} alt={nombre}/>
                <div>
                    <h3>{nombre}</h3>
                    <p>${precio}</p>
                    <p className="stock">Stock: {stock}</p>
                   
                    
                    <button><NavLink to={`/item/${itemid}`} activeClassName='boton-activo' className='boton'>Ver Mas</NavLink></button>
                </div>
    
            </article>
        </NavLink>
          
    )
}

export default ProductCard;