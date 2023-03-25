export default function Page404() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-white bg-dark"
      style={{ height: "60vh" }}
    >
      <h2 className="display-4 py-5">Oops! This page is not available!</h2>
      <p>
        The route <b>{location.pathname}</b> is not part of this site...
      </p>
      <p>Please check if there's a typo in your link!</p>
    </div>
  );
}
