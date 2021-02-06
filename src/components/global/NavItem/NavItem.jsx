import {NavLink} from 'react-router-dom';


const NavItem = ({texto, url}) => (   
    <li>
        <NavLink to={url} activeClassName="active">{texto}</NavLink>
    </li>
);


export default NavItem;