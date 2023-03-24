import { useStates } from "./utilities/states";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Category from "./Category";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ScreeningList() {
  const s = useStates("main");
  let filteredScreenings =
    s.selectedCategory === "All"
      ? s.screeningsXmovies
      : s.screeningsXmovies.filter((sc) => {
          return sc.description.categories.includes(s.selectedCategory);
        });
  let dates = new Set(filteredScreenings.map((sc) => sc.time.substring(0, 10)));
  dates = [...dates];
  dates.sort((a, b) => new Date(a) - new Date(b));
  let screenInfos = [];
  for (const date of dates) {
    screenInfos.push({
      date: new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date)),
      screenings: filteredScreenings.filter((sc) => {
        return sc.time.substring(0, 10) == date;
      }),
    });
  }
  return (
    <div className="bg-dark">
      <Category></Category>
      <Container fluid="md">
        {screenInfos.map((screenInfo) => {
          return (
            <>
              <h1 className="text-white">{screenInfo.date}</h1>
              <Row xs={1} sm={2} md={3} xl={4} gap={3}>
                {screenInfo.screenings.map(
                  ({ id, time, title, description: d, movieId: mid }) => (
                    <Col className="my-3">
                      <Link to={"/booking/" + id} className="screening-link">
                        <Card className="screening bg-secondary">
                          <Card.Body>
                            <Card.Title className="text-center text-white">
                              {title}
                            </Card.Title>
                            <Card.Text className="text-center text-white">
                              Length: {Math.floor(d.length / 60)} h{" "}
                              {d.length % 60} m
                              <br />
                              Categories: {d.categories.join(", ")}
                              <br />
                              Time:{" "}
                              {new Intl.DateTimeFormat("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                              }).format(new Date(time))}
                            </Card.Text>
                          </Card.Body>
                          <Card.Img
                            variant="bottom"
                            src={
                              "https://cinema-rest.nodehill.se" + d.posterImage
                            }
                            style={{ objectFit: "cover", height: "14rem" }}
                          />
                        </Card>
                      </Link>
                    </Col>
                  )
                )}
              </Row>
            </>
          );
        })}
      </Container>
    </div>
  );
}
