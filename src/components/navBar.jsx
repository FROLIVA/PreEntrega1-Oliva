import React from 'react';
import CartWidget from './CartWidget';
import { FaShoePrints } from 'react-icons/fa'; // Importa el ícono que usarás como logo

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo con ícono */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <FaShoePrints className="me-2" /> {/* Ícono del logo */}
                    FR SHOES
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/nike">NIKE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/puma">PUMA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/adiddas">ADDIDAS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/new-balance">NEW BALANCE</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;