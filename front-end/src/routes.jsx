import React from "react";
import App from "./App"
import Result from "./result"
import { ToastContainer } from 'react-toastify';
import {BrowserRouter,Route,Routes} from "react-router-dom"

const  Controller= () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App/>}/>
          <Route path="/user" exact element={<Result />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default Controller;
