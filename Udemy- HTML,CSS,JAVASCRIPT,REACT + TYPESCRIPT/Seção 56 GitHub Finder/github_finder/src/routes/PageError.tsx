import { useRouteError } from "react-router-dom";
import BackBtn from './../components/BackBtn';
import classes from "./PageError.module.css";

type ErrorResponse = {
  status?: number;
  statusText?: string;
};

const PageError = () => {
  const error = useRouteError();
  const errorResponse = error as ErrorResponse;

  return (
    <div className={classes.error}>
      <h1>Ops!</h1>
      <p>Ops! Parece que algo deu errado.</p>

      <p>
        {errorResponse?.status === 404 ? (
          <span>
            Página não encontrada <span className={classes.errorNumber}>{errorResponse.status}</span>
          </span>
        ) : (
          <i>Status: {errorResponse?.status}</i>
        )}
      </p>
      <BackBtn />
    </div>
  );
};

export default PageError;
