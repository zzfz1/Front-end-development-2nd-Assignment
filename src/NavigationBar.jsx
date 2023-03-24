import Nav from "react-bootstrap/Nav";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/movie-list" className="nav-link text-white">
                Movie List
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/screen-list" className="nav-link text-white">
                Screenings List
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}
