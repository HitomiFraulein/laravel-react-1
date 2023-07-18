import { Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useNavigate();
  function logOut() {
    localStorage.clear();
    history("/login");
  }
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hitomi</Navbar.Brand>
          <Nav className="me-auto navbar-wrapper ">
            {localStorage.getItem("user-info") ? (
              <>
                <Link className="text-decoration-none" to="/">ProductList</Link>
                <Link className="text-decoration-none" to="/add">Add</Link>
                <Link className="text-decoration-none" to="/update">Update</Link>
                <Link className="text-decoration-none" to="/search">Search</Link>
              </>
            ) : (
              <>
                <Link className="text-decoration-none" to="/login">Login</Link>
                <Link className="text-decoration-none" to="/register">Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.ItemText onClick={logOut}>
                  Logout
                </NavDropdown.ItemText>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
