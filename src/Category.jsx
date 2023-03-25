import { useStates } from "./utilities/states";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Category() {
  const s = useStates("main");

  return (
    <Container fluid>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              overflowY: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Button
              className="category-link"
              variant="link"
              onClick={() => (s.selectedCategory = "All")}
            >
              All
            </Button>
            {s.categories.map(({ title }) => (
              <Button
                className="category-link"
                variant="link"
                onClick={() => (s.selectedCategory = title)}
              >
                {title}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
