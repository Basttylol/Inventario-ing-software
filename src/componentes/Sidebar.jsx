import imagenes from "../imagenes";
import {NavLink} from 'react-router-dom'

const Sidebar = () =>{


    return (
        <div className="sidebar" >
            <ul>
                <li>
                    <img src={imagenes.img1} alt="Logotipo" />
                </li>
                <li>
                    <NavLink to="/inventario" className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/agregar" className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Agregar</span>
                    </NavLink>
                </li>
            </ul>

        </div>

    )
}

export default Sidebar

