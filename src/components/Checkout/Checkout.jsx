import {useContext, useState} from 'react'; 
import { Store } from '../../Contexts/Store';
import { getFirestore } from '../../db';
import firebase from 'firebase/app';
import './Checkout.css'; 

function Checkout() {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        tel: '',
        nombreTarjeta: '',
        numeroTarjeta: '',
        fechaTarjeta: '',
        codigoTarjeta: '', 

    })
    const [idCompra, setIdCompra] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const compra = {
        user: formData,
        items: data.cartItems,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

    return (
        <section className="checkout">
            <div className="container">
                <h2>Checkout</h2>

                {
                    !venta ?
                    <form onSubmit={handleSubmitForm}>
                        <h3>Datos del comprador</h3>
                        <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                        <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Teléfono" />
                        <h3>Datos de la tarjeta</h3>
                        <input type="text" value={formData.nombreTarjeta} onChange={handleChangeInput} name="nombreTarjeta" placeholder="Nombre del Titular" />
                        <input type="number" value={formData.numeroTarjeta} onChange={handleChangeInput} name="numeroTarjeta" placeholder="Numero de la Tarjeta" />
                        <input type="fecha" value={formData.fechaTarjeta} onChange={handleChangeInput} name="fechaTarjeta" placeholder="Fecha de Vencimiento" />
                        <input type="number" value={formData.codigoTarjeta} onChange={handleChangeInput} name="codigoTarjeta" placeholder="Codigo de Seguridad" />
                        <button>Pagar</button>
                    </form> :
                    <p>La compra se realizó correctamente, tu número de seguimiento es: {idCompra}</p>
                }
            </div>
        </section>
    )
}


export default Checkout;
