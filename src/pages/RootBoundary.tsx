import { useRouteError } from "react-router-dom";

export const RootBoundary = () => {
  const _error = useRouteError() as Error;
  console.log(_error);

  return (
    <>
      <h1>Router error</h1>
      <h2>{_error.message}</h2>
    </>
  );
};
