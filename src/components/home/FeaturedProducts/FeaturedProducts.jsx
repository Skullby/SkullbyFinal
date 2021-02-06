import ProductCard from '../../global/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {useState, useEffect} from 'react';
import { getFirestore } from '../../../db';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore();
  

 
    const getProducstFromDB =  () => {
        db.collection('productos').where("destacado", "==", true).get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })

            setItems(arr);
        })
        .catch(e => console.log(e));

// usando onSnapshot, esto se actualiza instanteaneamente

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
    }, [])
    
    
    
    
    
    
    return(
        <section className="featuredProducts">
            <div>
                 {
                    items.length ?
                    <>
                        <h2>Productos destacados</h2>

                        <ul>
                            {
                                items.map((item) => (
                                    <li key={item.id}>
                                        <ProductCard 
                                            nombre={item.data.nombre} 
                                            precio={item.data.precio} 
                                            stock={item.data.stock}
                                            foto={item.data.foto}
                                            itemid={item.data.id}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items...</p>
                }
            </div>

        </section>
    )
}

export default FeaturedProducts;