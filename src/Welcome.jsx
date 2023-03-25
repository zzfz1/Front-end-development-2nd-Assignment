import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TicketInfo from "./TicketInfo";

export default function Welcome() {
  return (
    <Container fluid className="bg-dark p-5">
      <div className="jumbotron text-center text-white bg-dark">
        <h1 className="display-4">Welcome to Feature Flicks!</h1>
        <p>Check out our movies and screenings</p>
        <p>
          <Link to="/movie-list">
            <Button variant="primary" className="m-2">
              Movies
            </Button>
          </Link>
          <Link to="/screen-list">
            <Button variant="primary" className="m-2">
              Screenings
            </Button>
          </Link>
        </p>
      </div>
      <div className="jumbotron text-center text-white bg-dark">
        <h1>About Us</h1>
        <p>
          We are a small cinema that wants to start competing locally with SF.
        </p>
        <p>
          We have two auditoriums "Lilla Salen" and "Stora Salen" and are
          located in Småstad in Sweden.
        </p>
      </div>
      <TicketInfo></TicketInfo>
    </Container>
  );
}
