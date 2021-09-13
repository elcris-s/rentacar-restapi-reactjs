import React, { Component } from 'react'
import Menu from './bars-solid.svg'
import Close from './times-solid.svg'
import { Link} from 'react-router-dom'
import './Header.css'
import Cookies from 'universal-cookie'

export class Header extends Component {

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    CerrarSesion = () =>{
    const cookies = new Cookies();
      cookies.remove('id', {path: '/'});
      cookies.remove('IdUsuario', {path: '/'});
      cookies.remove('IdRol', {path: '/'});
      cookies.remove('Usuario', {path: '/'});
      cookies.remove('Contraseña', {path: '/'});
    }

    render() {
        const {toggle} = this.state;
        const {cart} = this.context;

        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1>
                        <Link to="/">
                            Rentacar
                        </Link>
                    </h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/cliente">Inicio</Link></li>
                        <li><Link to="/cliente/vehiculos">Vehiculos</Link></li>
                        <li><Link to="/cliente/extras">Extras</Link></li>
                        <li><Link to="/cliente/nosotros">Nosotros</Link></li>
                        <Link className="btn btn-danger" to='/signIn' onClick={this.CerrarSesion} >Cerrar Sesión</Link>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header