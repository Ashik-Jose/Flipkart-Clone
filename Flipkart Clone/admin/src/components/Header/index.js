import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/auth.action";

const Header = ({ props }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loggedInLinks = () => {
    return (
      <Nav>
      <li className="nav-item">
        <span className="nav-link" style={{cursor:"pointer"}} onClick={()=> dispatch(signout())}>Sign Out</span>
      </li>
      </Nav>
    );
  };

  const nonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signIn" className="nav-link">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signUp" className="nav-link">
            SignUp
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: 1 }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {auth.authenticate ? loggedInLinks() : nonLoggedInLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
