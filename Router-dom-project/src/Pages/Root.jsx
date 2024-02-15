import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

function Root() {
    const {state}=useNavigation();
    console.log(state)
  return (
    <>
      <Link to="/"> Movie Serch</Link>

    {state=='idle'?<Outlet/>:<h1>Loading ....</h1>}
    </>
  );
}

export default Root;
