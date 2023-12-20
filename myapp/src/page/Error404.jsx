import React from 'react'
import "./Error404.scss"
import { Link } from "react-router-dom";
// import Navbar from "./composants/Navbar";
// import Main from "../layout/Main";

export function Error404() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Main> */}
        <div className="error-page">
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      {/* </Main> */}
    </>
  );
}
export default Error404