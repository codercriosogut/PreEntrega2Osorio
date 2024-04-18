import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./img/logo.jpg";
import Message from './Message';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="p-4 shadow-md bg-slate-400">
            <div className="flex justify-between items-center">
                <h1 id="titulo" className="flex encabezado mr-auto">PanGourmet</h1>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand >Menú</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
                            <Nav className="items-center justify-center gap-4">
                                <Link to="/">home</Link>
                                <Link to="/">Productos</Link>
                                <Link to="/characters">Personajes</Link>
                                <Link to="/Sucursales">Sucursales</Link>
                                <Link to="/contactos">Contacto</Link>
                            </Nav>
                            <div className="flex items-center">

                                <ShoppingCart size={48} />
                                <span>1</span>
                                <Message />
                            </div>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <img src={Logo} alt="" />
        </header>
    );
}

export default Header;
