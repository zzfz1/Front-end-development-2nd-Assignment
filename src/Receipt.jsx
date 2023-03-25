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
  return (
    <>
      <h2>Thank you for booking</h2>
      <p>
        The booking was successful. Your booking number is {"not defined"}. We
        are looking forward to seeing you in the cinema!
      </p>
      {total}
      {movie}
      {auditorium}
      {seats}
      {time}
      {adults}
      {seniors}
      {children}
    </>
  );
}
