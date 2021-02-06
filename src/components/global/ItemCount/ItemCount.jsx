import {useState, useContext} from 'react';
import "./ItemCount.css";
import {Store} from '../../../Contexts/Store';

function ItemCount({ onAdd }, {prods}) {
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);


    const handleClickResta = () => {
        if(qty > 0) {
            setQty(qty - 1);
        }
    };       

    const onCart = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items:[...data.items, prods],
        });
        
        
    };

    

    console.log(data); 
    
      


    return(
        <div>
        <div className="qty">
         <button 
            disabled={!qty ? 'disabled' : null } 
            onClick={handleClickResta}>
                    -
         </button>
                <input type="text" value={qty} readOnly/>
         <button onClick={() => setQty(qty + 1)}> 
                +
         </button>
         
         
        </div>
        <button className='add' onClick={onCart}>Agregar al Carrito</button>
        </div>

    )
    
}

export default ItemCount; 