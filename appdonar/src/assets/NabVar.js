import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NabVar.css';

export default function NabVar ()
{
    return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img alt="" src="./opa.png" width="30" height="30"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Donaciones</Nav.Link>
                    <Nav.Link href="#">Contactanos✉️</Nav.Link>
                    <NavDropdown title="Sobre Nosotros" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Actividades</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Quienes Somos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Objetivos</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
    </>        
    );
}