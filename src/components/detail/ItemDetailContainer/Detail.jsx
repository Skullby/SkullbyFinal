import {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../../db';


const Detail = () => {
    const {itemid} = useParams();
    const [product, setProduct] = useState(null);
    const db = getFirestore();

    useEffect(() => {
        db.collection('productos').doc(itemid).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(e => console.log(e));

        // db.collection('productos').doc(id)
        // .onSnapshot(function(doc) {
        //     setProduct(doc.data());
        // });
    }, []);
    console.log(itemid);
    
   

    console.log(product)

    return (
        <>
            {
                product ?
                <div>
                    <ItemDetail item={product} />

                    
                </div> : 
                <p>Cargando producto...</p>
            }
        </>
    )
}
export default Detail; 