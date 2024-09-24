import { useRouteError } from "react-router-dom";
import BackBtn from './../components/BackBtn';
import classes from "./PageError.module.css";

const PageError = () => {
  const error = useRouteError();
  console.log({ error });

  return (
    <div className={classes.error}>
      <h1>Ops!</h1>
      <p>Ops! Parece que algo deu errado.</p>
      
      <p>
        {error.status === 404 ? (
          <span>
            Página não encontrada <span className={classes.errorNumber}>{error.status}</span>
          </span>
        ) : (
          <i>Status: {error.status}</i>
        )}
      </p>
      <BackBtn />
    </div>
  );
};

export default PageError;
