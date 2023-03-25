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
          <Image src="/icon/search.svg" style={{ width: "20px" }} />
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
