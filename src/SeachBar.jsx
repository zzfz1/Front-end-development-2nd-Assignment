import { useStates } from "./utilities/states";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBar() {
  const s = useStates("main");

  const handleChange = (event) => {
    s.searchText = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="bg-dark">
      <InputGroup className="mb-3">
        <InputGroup.Text style={{ backgroundColor: "transparent" }}>
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <g data-name="search">
                <rect width="24" height="24" opacity="0" />
                <path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
              </g>
            </g>
          </svg>
        </InputGroup.Text>
        <Form.Control
          className="bg-dark text-white"
          type="text"
          placeholder="Search"
          value={s.searchText}
          onChange={handleChange}
        />
      </InputGroup>
    </Form>
  );
}
