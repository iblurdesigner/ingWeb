import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';


import logo from '../images/logo.png';

class NavBar extends React.Component {
    render() {
        return (
            <div className="Navbar sticky-top">
                
                <nav className="container-fluid navbar navbar-expand-md">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
  
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="col-sm-7">
                            <Link className="Navbar__brand" to="/">
                                <img className="Navbar__brand-logo" src={logo} alt="" />
                                <span className="font-weight-light navbar-text">Evento </span>
                                <span className="font-weight-bold navbar-text">de Turismo en Loja</span>
                            </Link>
                        </div>
                        <ul className="col-sm-5 align-items-center navbar-nav">
                            <Link to="/" className="link-unstyled nav-link enlaces">Inicio</Link>
                            <Link to="/ponencias" className="link-unstyled nav-link enlaces"> Ponencias</Link>
                            <Link to="/expositores" className="link-unstyled nav-link enlaces"> Expositores</Link>
                            <Link to="/agenda" className="link-unstyled nav-link enlaces"> Agenda</Link>
                            <Link to="/registro" className="link-unstyled nav-link enlaces"> Registro</Link>
                            <Link to="/badges" className="link-unstyled nav-link enlaces"> Contacto</Link>
                        </ul>
                    </div>

                </nav>

            </div>
        )
    }        
}

export default NavBar;