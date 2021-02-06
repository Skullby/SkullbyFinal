import { BiCart } from 'react-icons/bi';
import './NavCart.css';
import {Store} from '../../../Contexts/Store';
import {useContext, useState, useEffect} from 'react'; 

const NavCart = ({action}) => {
    const [data, setData] = useContext(Store); // le doy el valor del contexto. useContext permite que se conserve a traves de componentes 
    const [showCart, setShowCart] = useState(false)

    
    useEffect(() => {
        if(data.cantTotal === 0) {
            setShowCart(false)
        } else {
            setShowCart(true)
        };
    }, [data])

    return(
       <>
            {showCart ? 
                        <div className="cart" onClick={action}>
                            <BiCart/>
                            <span>{data.cantTotal}</span>
                        </div> 
                    : 
                        null
                    
            }
       </>
    )
}

export default NavCart;