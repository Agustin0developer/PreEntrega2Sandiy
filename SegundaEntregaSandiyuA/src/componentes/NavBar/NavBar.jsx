import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoMarolio' src={"../../../public/img/log.png"} alt="Logo Marolio" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/2">Celulares</NavLink>
          </li>

          <li>
            <NavLink to="categoria/3">Computadora</NavLink>
          </li>

          <li>
            <NavLink to="categoria/4">Tablet</NavLink>
          </li>

          <li>
            <NavLink to="categoria/5">Impresoras</NavLink>
          </li>

          <li>
            <input type="search" className="input-busqueda" />
          </li>
          
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar