import { useRouteError } from "react-router-dom";
import React from "react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, unexpected error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
