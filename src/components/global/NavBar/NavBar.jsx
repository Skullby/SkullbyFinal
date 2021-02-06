import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/Imagenes/logo.svg';
import Cart from "../Cart/NavCart";
import './NavBar.css';
import NavItem from '../NavItem/NavItem';

function NavBar({titulo, action}) {
    // const {titulo} = props;

    const menuItems = [
        {
            texto: 'Teclados',
            ruta: '/category/teclados',
        },
        {
            texto: 'Mouses',
            ruta: '/category/mouses',
        },
        {
            texto: 'Monitores',
            ruta: '/category/monitores',
        },
        {
            texto: 'Placas de video',
            ruta: '/category/placas-de-video',
        },
        {
            texto: 'CPUs',
            ruta: '/category/cpus',
        },
    ]

   
    return(
        <>
        
            <header>
            
                <ul className="nav">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/sobrenosotros'}>Sobre Nosotros</Link></li>
                </ul>

               
                <Cart action={action}/>
        
        
                <div className="container">
                <NavLink to={'/'} activeClassName="img"><img src={logo}   alt='logo'/></NavLink>
                <h1 >{titulo}</h1>
                <h2>Tienda E-Commerce</h2>
                <nav>
                    
                    <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} texto={seccion.texto} url={seccion.ruta} />)   
                    }
                    </ul>
                    
                </nav>
                    
                </div>


            </header>
        
        </>

    )
}
export default NavBar;