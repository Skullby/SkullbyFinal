import './App.css';
import Error404 from '../components/Error404/Error404';
import NavAndWidgetCart from '../components/global/NavAndWidgetCart/NavAndWidgetCart';
import Home from '../components/home/Home/Home'; 
import Detail from '../components/detail/ItemDetailContainer/Detail'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from '../components/global/Footer/Footer';
import Checkout from '../components/Checkout/Checkout';
import Category from '../components/Category';
import {useState} from 'react';
import {Store} from '../Contexts/Store'
import Cart from '../components/Cart/Cart';
import AboutUs from '../components/AboutUs/index';

function App() {
  const [data, setData] = useState({
    cartItems:[],
    cantTotal:0,
    precioTotal:0,

  });

   
  return ( // Envolver a todo con Store.Provider permite a los componentes leer y modificar la data 
    <Store.Provider value={[data, setData]}>
     <BrowserRouter>
      <NavAndWidgetCart/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path="/item/:itemid">
            <Detail/>
          </Route>
          <Route path='/category/:category_name'>
            <Category/>
          </Route>
          <Route path='/sobrenosotros'>
            <AboutUs/>
          </Route>
          <Route path="*">
            <Error404/>
          </Route>
          </Switch>

          <Footer/>
        </BrowserRouter>
    </Store.Provider>
  );
}


export default App;
