import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./images/logo.png";
import { Navbar,Nav,NavDropdown,Container,Carousel } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
const NavbarComponent =()=>
{
    return(
        <>
        <div style={{marginTop: "6%"}}>
                <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" >
    <Container >
    <Navbar.Brand as={Link} to="/"><span><img src={Logo} alt="logo" /></span>Eating House</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="./Services" >Servicess</Nav.Link>
        <Nav.Link as={Link} to="./Price">Pricing</Nav.Link>
        <Nav.Link as={Link} to="./coming">Coming Soon</Nav.Link>
        <NavDropdown title="Dishes" id="collasible-nav-dropdown">
          <NavDropdown.Item id="items" as={Link} to="./services">Veg</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id="items" as={Link} to="./services">Non-Veg</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id="items" as={Link} to="./services">Fast Food</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id="items" as={Link} to="./services">Sweets</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to="./Contact">Contact Us</Nav.Link>
        <Nav.Link eventKey={2} as={Link} to="./rating">
         Review us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
        </>
    );
}
export default NavbarComponent;