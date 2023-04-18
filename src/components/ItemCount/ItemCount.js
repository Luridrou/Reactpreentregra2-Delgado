import { useState } from 'react'
import './ItemCount.css'


const ItemCount =({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
    
    const increment =()=> {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement =()=> {
        if(quantity> 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className='Contador'>
            <div className='Controles'>
                <button className="btn btn-outline-danger"onClick={decrement}><i className="bi bi-dash"></i></button>
                <h3 className='Numero'>{quantity}</h3>
                <button className="btn btn-outline-success"onClick={increment}><i className="bi bi-plus-lg"></i></button>
            </div>
            <div>
                <button className='Boton'onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount