import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Ops!</h1>
      <p>temos um problema</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
