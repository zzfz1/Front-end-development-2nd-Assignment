import Nav from "react-bootstrap/Nav";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

export function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" expand="md">
        <Navbar.Brand className="mx-3" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
            style={{ fill: "#ffff" }}
          >
            <path d="m140 256 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v520q0 24-18 42t-42 18H140q-24 0-42-18t-18-42V316q0-24 18-42t42-18Z" />
          </svg>
        </Navbar.Brand>
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
