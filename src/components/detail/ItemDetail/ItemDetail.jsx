import ItemCount from '../../global/ItemCount/ItemCount';
import './ItemDetail.css'; 
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom'; 
import {Store} from '../../../Contexts/Store';
import {listaProductos} from '../../assets/listaProductos';


const ItemDetail = ({item}) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const [data, setData] = useContext(Store); 
    const [qty, setQty] = useState(1);
  
    


    const addMore = () => {
       const isInCart = data.cartItems.filter(i => i.id === item.id)
        if(isInCart.length > 0){
            data.cartItems[data.cartItems.findIndex(i => i.id === item.id)].itemQty++
            setData({
                ...data,
                cantTotal: data.cantTotal + qty,
                precioTotal: data.precioTotal + item.precio
                
            })
        }else {
            
            setData({
                ...data, 
                cantTotal: data.cantTotal + qty,
                cartItems:[...data.cartItems, item],
                precioTotal: data.precioTotal + item.precio
            })
             
            setShowItemCount(false); 
        }    
    }
   


    console.log(data);

   
    


    
    return (
        <article className="itemDetail">
            <h1>{item.nombre}</h1>
            <img className="imgDetail" src={item.foto} alt=""/>
            <h3>Descripción:</h3>    
            <div className="descripcion">
            <p1>{item.descripcion}</p1>
            <p>${item.precio}</p> 
            <p>Stock: {item.stock}</p>
            { showItemCount ? 
                   
                   <button className='add' onClick={addMore}>Agregar al Carrito</button>
             :
                   <button onClick={addMore}>Agregar Mas</button>
           }




            
            </div>
        </article>
    )
}

export default ItemDetail; 