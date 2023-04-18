import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({id, name, img, price, stock}) => {
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
                  <Link to={`/Item/${id}`}>Más información</Link>
                </div>
        </div>
        
        

    )
}

export default Item