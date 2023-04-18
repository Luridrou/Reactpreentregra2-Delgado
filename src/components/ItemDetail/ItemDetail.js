import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return(
        <div class="tarjeta">
        <div class="titulo">{name}</div>
            <div class="cuerpo">
                <img src={img} alt={name}/>
            </div>
            <section>
                <p>
                    Precio:${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <div class="pie">
              <p>Más información</p>
            </div>
            <footer>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
            </footer>
    </div>
    )
}

export default ItemDetail