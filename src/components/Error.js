import { useRouteError } from "react-router-dom";

import React from 'react'

const Error = () => {

  const err = useRouteError();
  console.log(err);

  return (
    <div>Error</div>,
    <h1>{err.status} : {err.statusText}</h1>
  )
}

export default Error