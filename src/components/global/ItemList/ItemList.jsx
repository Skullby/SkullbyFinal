import Items from "../Item/Item";
import {useState, useEffect} from 'react'; 
import './ItemList.css';
import {NavLink} from 'react-router-dom';
import { getFirestore } from "../../../db";

const ItemList=() => {
    const [items, setItems] = useState([]);
    const db = getFirestore();
   
   
   
    
    const getProducstFromDB = () => {
        db.collection('productos').where("recomendado", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));

        // db.collection('productos').where("outstanding", "==", true)
        // .onSnapshot(function(querySnapshot) {
        //     var arr = [];
        //     querySnapshot.forEach(function(doc) {
        //         arr.push({id: doc.id, data: doc.data()});
        //     });
        //     setItems(arr);
        // });
    }

    useEffect(() => {
       getProducstFromDB();
        // eslint-disable-next-line
    }, []);
    
    
    
    
    return (
        
            <section className="itemList">
                <div>
                {items.length > 0 ? (
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <Items
                                    nombre={item.data.nombre}
                                    precio={item.data.precio}
                                    itemid={item.data.id}
                                />
                            </li>
                        ))}
                    </ul>
                    ) :  
                    (<p>Cargando items...</p>)}
                </div>
            </section>
        
        );
}

export default ItemList;