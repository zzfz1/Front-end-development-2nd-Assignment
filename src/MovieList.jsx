import { useStates } from "./utilities/states";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Category from "./Category";
import SearchBar from "./SeachBar";

export default function MovieList() {
  const s = useStates("main");
  let filteredMovies =
    s.selectedCategory === "All"
      ? s.movies
      : s.movies.filter((m) => {
          return m.description.categories.includes(s.selectedCategory);
        });
  filteredMovies =
    s.searchText === ""
      ? filteredMovies
      : filteredMovies.filter((sc) =>
          sc.title.toLowerCase().includes(s.searchText.toLowerCase())
        );
  return (
    <div className="bg-dark">
      <SearchBar></SearchBar>
      <Category></Category>
      <Container fluid="md">
        <Row xs={1} sm={2} md={3} xl={4} gap={3}>
          {filteredMovies.map(({ slug, title, description: d }) => (
            <Col className="my-3">
              <Link to={"/movie-detail/" + slug} className="movie-link">
                <Card className="movie bg-secondary">
                  <Card.Body>
                    <Card.Title className="text-center text-white">
                      {title}
                    </Card.Title>
                    <Card.Text className="text-center text-white">
                      Length: {Math.floor(d.length / 60)} h {d.length % 60} m
                      <br />
                      Categories: {d.categories.join(", ")}
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src={"https://cinema-rest.nodehill.se" + d.posterImage}
                    style={{ objectFit: "cover", maxHeight: "14rem" }}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
