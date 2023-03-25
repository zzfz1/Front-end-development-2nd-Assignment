import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function Receipt() {
  let { search } = useLocation();
  search = new URLSearchParams(search);
  const total = search.get("total");
  const movie = search.get("movie");
  const auditorium = search.get("auditorium");
  const seats = JSON.parse(search.get("seats"));
  const time = search.get("time");
  const [adults, seniors, children] = JSON.parse(search.get("type"));
  const ticketNumber = search.get("no");
  return (
    <div className="d-flex flex-column align-items-center text-center text-white bg-dark px-md-5">
      <h2 className="display-4 pt-3">Thank you for your booking!</h2>
      <p>
        The booking was successful. Here is your information about the booking:
      </p>
      <h2 className="mb-3">{movie}</h2>
      <h4>Booking Number: {ticketNumber}</h4>
      <Table hover variant="dark" style={{ width: "80%" }}>
        <tbody>
          <tr>
            <th>Total Price</th>
            <td>{total} SEK</td>
          </tr>
          <tr>
            <th>Ticket Amount</th>
            <td>{adults + seniors + children}</td>
          </tr>
          {adults === 0 ? null : (
            <tr>
              <td>Adult tickets</td>
              <td>{adults}</td>
            </tr>
          )}
          {seniors === 0 ? null : (
            <tr>
              <td>Senior Tickets</td>
              <td>{seniors}</td>
            </tr>
          )}
          {children === 0 ? null : (
            <tr>
              <td>Children Tickets</td>
              <td>{children}</td>
            </tr>
          )}
          <tr>
            <th>Auditorium</th>
            <td>{auditorium}</td>
          </tr>
          <tr>
            <th>Screening time</th>
            <td>{time}</td>
          </tr>
        </tbody>
      </Table>
      <h3 className="mt-5">Seat Numbers:</h3>
      <Table hover variant="dark" className="pb-5" style={{ width: "80%" }}>
        <thead>
          <tr>
            <th>Row</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {seats.map((seat, row) =>
            !seat ? null : (
              <tr>
                <th>{row}</th>
                <td>{seat.join(", ")}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}
