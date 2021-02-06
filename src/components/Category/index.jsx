import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../db';
import listaProductos from '../assets/listaProductos';
import ProductCard from '../global/ProductCard/ProductCard';
import './index.css'; 

function Category() {
    const [productos, setProductos] = useState([]);
    const {category_name} = useParams();
    const db = getFirestore();

    useEffect(() => {
        if(category_name) {
            db.collection('productos').where('categoria', '==', category_name).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setProductos(arr);
            })
        }
    }, [category_name]);


    return productos.length > 0 ? (
        <section className="categorias">
  
            <ul>
                {
                    
                    
                    productos.map((item) => (
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
        </section>
    ) : (
        <p className="cargando">Cargando items...</p>
    )
    
};

export default Category;