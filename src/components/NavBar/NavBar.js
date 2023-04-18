import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <Link to={'/'}>
            <h1>Mugishop</h1>
            </Link>
            <div>
                <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/Amiibos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Amiibos</NavLink>
                <NavLink to={`/category/Tazas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tazas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar