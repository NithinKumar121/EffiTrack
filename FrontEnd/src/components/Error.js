import { useRouteError } from "react-router-dom";
//hook for error handling

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops !!</h1>
      <h1>{err.status}</h1>
      <h2>{err.error.message}</h2>
    </>
  );
};

export default Error;
