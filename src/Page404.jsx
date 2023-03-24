export default function Page404() {
  return (
    <>
      <h2>Oops! This page is not available!</h2>
      <p>
        The route <b>{location.pathname}</b> is not part of this site...
      </p>
    </>
  );
}
