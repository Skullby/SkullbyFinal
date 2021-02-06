import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
function ItemListContainer() {
    return (
        <div className="overlay" >
            <h2>Items Recomendados</h2>
            <ItemList/>
                

        </div>
    )
}

export default ItemListContainer;